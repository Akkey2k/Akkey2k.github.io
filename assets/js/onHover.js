const touchHover = function() {
    document.querySelectorAll('[data-hover]').forEach(project => {
        project.addEventListener('touchmove', function (e) {
            e.preventDefault();
            const $this = e.target;
            // const onHover = $this.getAttribute('data-hover');
            const linkHref = $this.closest('a').getAttribute('href');
            if (linkHref && $this.classList.contains('onHover')) {
                location.href = linkHref;
                return false;
            }
            $this.classList.toggle('onHover');
        });
    });
};

touchHover()
