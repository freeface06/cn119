let calendar;

const colorMap = {
    '기본교육': [
        '#fde68a', '#fbcfe8', '#bfdbfe', '#bbf7d0', '#fcd34d',
        '#e0f2fe', '#e9d5ff', '#fef3c7', '#fecdd3', '#d9f99d'
    ],
    '전문교육': [
        '#c7d2fe', '#f5d0fe', '#a7f3d0', '#fee2e2', '#ddd6fe',
        '#fef9c3', '#e0e7ff', '#f0f9ff', '#f3e8ff', '#fee2e2'
    ],
    '기타': [
        '#e0f2f1', '#e3f2fd', '#f1f8e9', '#fce4ec', '#fff3e0',
        '#ede7f6', '#f9fbe7', '#f3e5f5', '#fbe9e7', '#e8f5e9'
    ]
};

const colorIndexMap = {
    '기본교육': 0,
    '전문교육': 0,
    '기타': 0
};


document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    function getIconForType(type) {
        switch (type) {
            case '기본교육':
                return 'school';
            case '전문교육':
                return 'science';
            default:
                return 'info';
        }
    }

    const events = DATA.map(item => {
        const type = item.type === '기본교육' || item.type === '전문교육' ? item.type : '기타';
        const palette = colorMap[type];
        const colorIndex = colorIndexMap[type] % palette.length;
        const backgroundColor = palette[colorIndex];
        colorIndexMap[type]++; // 다음 색으로 순환

        const isOneDay = item.start_date === item.end_date;

        return {
            id: item.id,
            title: item.title,
            start: item.start_date,
            end: dayjs(item.end_date).add(1, 'day').format('YYYY-MM-DD'),
            extendedProps: {
                icon: getIconForType(item.type),
                author: item.author,
                type: item.type,
                residential: item.residential,
                participants: item.total_participants,
                participants_detail: item.participants_detail,
                file: item.file_path,
                created_date: item.created_date
            },
            backgroundColor: isOneDay ? 'transparent' : backgroundColor,
            borderColor: isOneDay ? '#d1d5db' : backgroundColor, // 연한 회색 테두리 대체
            textColor: '#000000'
        };
    });

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2025-06-01',
        locale: 'ko',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttonText: {
            today: '오늘'
        },
        events: events,
        contentHeight: 'auto',
        expandRows: true,
        dayMaxEventRows: false,
        dayMaxEvents: 3,
        moreLinkText: function (n) {
            return `더보기 ${n}개`;
        },
        eventClick: function (info) {
            const props = info.event.extendedProps;

            document.getElementById('modalTitle').textContent = info.event.title;
            document.getElementById('modalAuthor').textContent = props.author;
            document.getElementById('modalCreated').textContent = props.created_date || 'N/A';
            document.getElementById('modalType').textContent = props.type;
            document.getElementById('modalResidential').textContent = props.residential;

            const participantsText = formatParticipants(props.participants, props.participants_detail);
            document.getElementById('modalParticipants').textContent = participantsText;

            document.getElementById('modalStartDate').textContent = info.event.startStr;
            document.getElementById('modalEndDate').textContent = dayjs(info.event.endStr).subtract(1, 'day').format('YYYY-MM-DD');

            const fileLink = document.getElementById('modalFile');
            const fileName = props.file?.split('/').pop() || '파일 없음';
            fileLink.href = props.file;
            fileLink.setAttribute('download', '');
            fileLink.querySelector('.file-name').textContent = fileName;

            // 모달 fade-in
            const modal = document.getElementById('eventModal');
            modal.classList.remove('fade-out');
            modal.style.display = 'flex';
            requestAnimationFrame(() => {
                modal.classList.add('fade-in');
            });
        },
        eventDidMount: function (info) {
            // 아이콘 붙이기 (기존 코드 유지)
            const iconName = info.event.extendedProps.icon;
            if (iconName) {
                const iconSpan = document.createElement('span');
                iconSpan.className = 'material-symbols-outlined';
                iconSpan.style.verticalAlign = 'middle';
                iconSpan.style.fontSize = '16px';
                iconSpan.style.marginRight = '4px';
                iconSpan.textContent = iconName;

                const titleEl = info.el.querySelector('.fc-event-title');
                if (titleEl) {
                    titleEl.prepend(iconSpan);
                }
            }

            // ✅ 이벤트 ID를 data 속성으로 부여
            info.el.setAttribute('data-event-id', info.event.id);
        }

    });

    calendar.render();

    // 범례
    const legend = document.createElement('div');
    legend.className = 'calendar-legend';
    legend.innerHTML = `
        <div class="legend-item">
            <span class="legend-box">
            <span class="material-symbols-outlined">science</span>
            </span>
            기본교육
        </div>
        <div class="legend-item">
            <span class="legend-box">
            <span class="material-symbols-outlined">school</span>
            </span>
            전문교육
        </div>
        <div class="legend-item">
            <span class="legend-box">
            <span class="material-symbols-outlined">info</span>
            </span>
            기타
        </div>
    `;

    document.querySelector('.fc-header-toolbar').appendChild(legend);

    // 모달 닫기
    const modal = document.getElementById('eventModal');
    document.getElementById('closeModalBtn').onclick = () => closeModal();
    window.onclick = function (event) {
        if (event.target === modal) closeModal();
    };

    function closeModal() {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    function formatParticipants(total, detail) {
        const regionMap = {
            daejeon: '대전',
            sejong: '세종',
            chungbuk: '충북',
            chungnam: '충남',
            fire_agency: '소방청'
        };
        const detailStr = Object.entries(detail || {})
            .filter(([_, count]) => count > 0)
            .map(([region, count]) => `${regionMap[region] || region} ${count}`)
            .join(', ');
        return `${total}(${detailStr})`;
    }
});

document.addEventListener('mouseover', function (e) {
    const target = e.target.closest('.fc-event');
    if (!target) return;

    const eventId = target.getAttribute('data-event-id');
    if (!eventId) return;

    document.querySelectorAll(`.fc-event[data-event-id="${eventId}"]`)
        .forEach(el => el.classList.add('fc-event-hover'));
});

document.addEventListener('mouseout', function (e) {
    const target = e.target.closest('.fc-event');
    if (!target) return;

    const eventId = target.getAttribute('data-event-id');
    if (!eventId) return;

    document.querySelectorAll(`.fc-event[data-event-id="${eventId}"]`)
        .forEach(el => el.classList.remove('fc-event-hover'));
});

let showAllEvents = false;

document.addEventListener('DOMContentLoaded', function () {
    // ✅ 토글 버튼 생성
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle-events-btn';
    toggleBtn.type = 'button';
    toggleBtn.textContent = '전체';
    toggleBtn.style.width = '70px'; // ✅ 고정 너비
    toggleBtn.className = 'fc-button fc-button-primary'; // ✅ FullCalendar 스타일 그대로 적용

    // ✅ 오늘 버튼 옆에 삽입
    const todayBtn = document.querySelector('.fc-today-button');
    if (todayBtn && todayBtn.parentNode) {
        todayBtn.parentNode.insertBefore(toggleBtn, todayBtn.nextSibling);
    }

    // ✅ 이벤트 설정
    toggleBtn.addEventListener('click', function () {
        showAllEvents = !showAllEvents;
        calendar.setOption('dayMaxEvents', showAllEvents ? false : 3);
        toggleBtn.textContent = showAllEvents ? '숨기기' : '전체';
    });
});