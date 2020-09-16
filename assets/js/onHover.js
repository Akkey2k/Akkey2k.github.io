// const touchHover = function() {
//     const projects = document.querySelectorAll('[data-hover]').forEach(project => {
//         console.log(project);
//         const p = new Map(projects)
//         // for(let i = 0;i<projects.length;i++){
//         //     projects[i].classList.remove('onHover');
//         // }
//         project.addEventListener('click', function (e) {
//             e.preventDefault();
//             const $this = e.target;
//             const linkHref = $this.closest('a').getAttribute('href');
//             if ($this && linkHref && $this.classList.contains('onHover')) {
//                 // location.href = linkHref;
//                 window.open(linkHref, '_blank');
//                 return false;
//             }
//             $this.classList.add('onHover');
//         });
//     });
// };
//
// touchHover()




const touchHover = function() {
    const projects = document.querySelectorAll('[data-hover]');
    for(let i = 0;i<projects.length;i++){
        projects[i].addEventListener('touchend', function (e) {
            //Для таргета
            e.preventDefault();
            const $this = e.target;
            const linkHref = $this.closest('a').getAttribute('href');
            if ($this && linkHref && $this.classList.contains('onHover')) {
                // location.href = linkHref;
                window.open(linkHref, '_blank');
                return false;
            }
            //Перебор всех элементов и ремув класса на них
            projects.forEach(project => {
                project.classList.remove('onHover');
            });
            $this.classList.add('onHover');
        });
    }

};

touchHover()
