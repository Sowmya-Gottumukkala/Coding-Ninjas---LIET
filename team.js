
        document.addEventListener("DOMContentLoaded", function () {
        var teamMembers = document.querySelectorAll('.team-member');

       function isInViewport(element)
	   {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateTeamMembers() {
        teamMembers.forEach(function (member, index) {
            if (isInViewport(member) && !member.classList.contains('active')) {
                member.classList.add('active');
            }
        });
    }

    document.addEventListener('scroll', animateTeamMembers);
});

    
