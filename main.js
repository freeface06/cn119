document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const titleCategoryMap = [
        { keyword: '관리역량', category: '소방행정', icon: 'fire_extinguisher' },
        { keyword: '소방시설', category: '시설기술', icon: 'engineering' },
        { keyword: '예산회계', category: '행정/회계', icon: 'account_balance' },
        { keyword: '위험물', category: '화학/위험', icon: 'science' },
        { keyword: '급류구조', category: '구조', icon: 'flood' },
        { keyword: '재난현장 언론', category: '재난대응', icon: 'campaign' },
        { keyword: '펌블런스', category: '구급', icon: 'medical_services' },
        { keyword: '전문구급소생술', category: '구급', icon: 'monitor_heart' },
        { keyword: '다수사상자', category: '구급', icon: 'group' },
        { keyword: '소방드론', category: '드론', icon: 'flight' },
        { keyword: '현장지휘관', category: '지휘', icon: 'assignment' },
        { keyword: '교관', category: '교육훈련', icon: 'school' }
    ];

    function getIconForTitle(title) {
        const match = titleCategoryMap.find(item => title.includes(item.keyword));
        return match ? match.icon : '';
    }

    const events = DATA.map(item => ({
        title: item.title,
        start: item.start_date,
        end: dayjs(item.end_date).add(1, 'day').format('YYYY-MM-DD'),
        extendedProps: {
            icon: getIconForTitle(item.title),
            author: item.author,
            type: item.type,
            residential: item.residential,
            participants: item.total_participants,
            participants_detail: item.participants_detail,
            file: item.file_path,
            created_date: item.created_date
        },
        classNames: getEventClassByType(item.type)
    }));

    function getEventClassByType(type) {
        switch (type) {
            case '기본교육':
                return ['fc-type-basic'];
            case '전문교육':
                return ['fc-type-expert'];
            default:
                return ['fc-type-default'];
        }
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
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
        }
    });

    calendar.render();

    window.addEventListener('resize', () => {
        const newView = window.innerWidth < 768 ? 'listMonth' : 'dayGridMonth';
        if (newView !== currentView) {
            currentView = newView;
            calendar.changeView(newView);
        }
    });

    // 범례
    const legend = document.createElement('div');
    legend.className = 'calendar-legend';
    legend.innerHTML = `
      <div class="legend-item"><span class="legend-box" style="background-color: #10b981;"></span> 기본교육</div>
      <div class="legend-item"><span class="legend-box" style="background-color: #3b82f6;"></span> 전문교육</div>
      <div class="legend-item"><span class="legend-box" style="background-color: #6b7280;"></span> 기타</div>
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
