document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "UI/UX Designer", "Cloud Engineer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    function toggleSkills() {
        const lightbulb = document.querySelector('.lightbulb');
        lightbulb.classList.toggle('active');
        document.querySelectorAll('.Skill-bubble').forEach(bubble => {
            if (bubble.style.opacity === '1') {
                bubble.style.opacity = '0';
                bubble.style.transform = 'scale(1)';
            } else {
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1.2)';
            }
        });
    }

    document.querySelector(".lightbulb").addEventListener("click", toggleSkills);
});
