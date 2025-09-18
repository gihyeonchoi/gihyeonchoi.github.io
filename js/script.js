// 필터 기능
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 활성 버튼 스타일 변경
        filterBtns.forEach(b => {
            b.classList.remove('bg-gray-900', 'text-white');
            b.classList.add('bg-white', 'text-gray-900', 'border-2', 'border-gray-900');
        });
        btn.classList.remove('bg-white', 'text-gray-900', 'border-2', 'border-gray-900');
        btn.classList.add('bg-gray-900', 'text-white');

        // 카드 필터링 (자연스럽게)
        const category = btn.dataset.category;
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

        // 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});