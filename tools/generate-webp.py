#!/usr/bin/env python3
"""Regenerate WebP variants + content/media.js dimensions map.
Requires: Python 3 + Pillow  (pip install pillow)
Run from the project root:  python3 tools/generate-webp.py
- Writes a .webp next to every live raster image (quality 82).
- Writes a -900.webp variant for large images (used by srcset).
- Rewrites content/media.js with each image's width/height (+ small variant).
The HTML/JS reference the original .jpg; picHTML() derives the .webp automatically."""
from PIL import Image
import os, json, glob

LIVE_DIRS = ['images/respectly','images/unmapped','images/building',
             'images/playground','images/after-hours']
EXTRA = ['images/aashika-portrait.jpg']
LARGE_PREFIXES = ('images/respectly/','images/unmapped/','images/aashika-portrait')

def main():
    targets = []
    for d in LIVE_DIRS:
        targets += [p for p in glob.glob(d+'/*') if p.lower().endswith(('.jpg','.jpeg','.png'))]
    targets += [p for p in EXTRA if os.path.exists(p)]
    dims = {}
    for p in sorted(targets):
        im = Image.open(p).convert('RGB'); w, h = im.size
        base = os.path.splitext(p)[0]
        im.save(base+'.webp', 'WEBP', quality=82, method=6)
        entry = {'w': w, 'h': h}
        if p.startswith(LARGE_PREFIXES) and w > 1000:
            sw = 900; sh = round(h*sw/w)
            sm = base+'-900.webp'
            im.resize((sw, sh), Image.LANCZOS).save(sm, 'WEBP', quality=80, method=6)
            entry['sm'] = os.path.basename(sm)
        dims[p] = entry
    with open('content/media.js', 'w', encoding='utf-8') as f:
        f.write("/* AUTO-GENERATED image dimensions for CLS + srcset. Regenerate with tools/generate-webp.py */\n")
        f.write("window.MEDIA=" + json.dumps(dims, separators=(',', ':')) + ";\n")
        f.write(PICHTML)
    print(f"Wrote {len(dims)} entries + WebP files to content/media.js")

# picHTML helper is appended so media.js stays self-contained after regeneration.
PICHTML = r'''/* picHTML(src, {alt, cls, eager, sizes, style}) -> <picture> with webp source
   (+ responsive srcset when a small variant exists), original as fallback,
   intrinsic width/height (CLS), lazy-loading by default. */
window.picHTML=function(src,opts){
  opts=opts||{};
  var ext=/\.(jpe?g|png)$/i;
  var cls=opts.cls?(' class="'+opts.cls+'"'):'';
  var style=opts.style?(' style="'+opts.style+'"'):'';
  var alt=' alt="'+String(opts.alt||'').replace(/"/g,'&quot;')+'"';
  var loading=opts.eager?'':' loading="lazy" decoding="async"';
  if(!ext.test(src)) return '<img src="'+src+'"'+cls+style+alt+loading+'>';
  var webp=src.replace(ext,'.webp');
  var m=(window.MEDIA||{})[src]||null;
  var dir=src.slice(0,src.lastIndexOf('/')+1);
  var srcset=webp, sz='';
  if(m&&m.sm){ srcset=dir+m.sm+' 900w, '+webp+' '+m.w+'w'; sz=' sizes="'+(opts.sizes||'(max-width: 960px) 100vw, 900px')+'"'; }
  var wh=m?(' width="'+m.w+'" height="'+m.h+'"'):'';
  return '<picture><source type="image/webp" srcset="'+srcset+'"'+sz+'>'+
         '<img src="'+src+'"'+cls+style+alt+wh+loading+'></picture>';
};
'''

if __name__ == '__main__':
    main()
