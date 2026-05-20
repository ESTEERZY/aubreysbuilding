import math

svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M 50 15 L 80 65 L 50 90 L 20 65 Z" fill="none" stroke="#BAA892" stroke-width="12" stroke-linejoin="miter" stroke-miterlimit="4"/>
</svg>"""

with open("public/logo.svg", "w") as f:
    f.write(svg_content)

with open("public/favicon.svg", "w") as f:
    f.write(svg_content)
