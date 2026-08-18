
.submenu-hidden {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}
.submenu-hidden.show {
    max-height: 500px; /* or large enough to fit content */
    opacity: 1;
}
```
Update your HTML:
```html
<div id="fobb-menu" class="submenu submenu-hidden"></div>
```
```js
function onSubmenuMouseOver(id) {
    const menu = document.getElementById(id + '-menu');
    menu.classList.remove('hidden');
    menu.classList.add('show');
}
```
2. **Ensure consistent transition timing and avoid rapid on/off toggling** by debouncing hover events if needed.
3. **Use `transform` and `opacity` for animations** (GPU-accelerated, smoother than `margin` or `top`).
4. **Add `pointer-events: none` temporarily on hover** (optional) to prevent content clicks during animation, improving UX.

### Minimal CSS example to fix flickering:
```css
.submenu {
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

.submenu.show {
    max-height: 500px;
    opacity: 1;
}
```

This prevents sudden layout jumps and creates smooth hover transitions, eliminating flickering.

