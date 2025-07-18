const DATA = [
    {
        "id": 1,
        "title": "제32기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-07-01",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "38명",
        "participants_detail": {
            "daejeon": 4,
            "sejong": 3,
            "chungbuk": 12,
            "chungnam": 18,
            "fire_agency": 1
        },
        "start_date": "2025-07-09",
        "end_date": "2025-07-11",
        "file_name": "제32기+소방위+관리역량+과정+입교+및+생활안내.pdf",
        "file_path": "./file/제32기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 2,
        "title": "제31기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-07-01",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "38명",
        "participants_detail": {
            "daejeon": 7,
            "sejong": 2,
            "chungbuk": 12,
            "chungnam": 17
        },
        "start_date": "2025-07-07",
        "end_date": "2025-07-09",
        "file_name": "제31기 소방위 관리역량 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제31기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 3,
        "title": "제4기 소방행정실무 과정",
        "author": "오진웅",
        "created_date": "2025-07-01",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "27명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 2,
            "chungbuk": 9,
            "chungnam": 14
        },
        "start_date": "2025-07-07",
        "end_date": "2025-07-09",
        "file_name": "제4기 소방행정실무 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제4기+소방행정실무+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 4,
        "title": "제4기 예산회계실무 과정",
        "author": "오진웅",
        "created_date": "2025-07-01",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "26명",
        "participants_detail": {
            "daejeon": 3,
            "sejong": 1,
            "chungbuk": 8,
            "chungnam": 14
        },
        "start_date": "2025-07-02",
        "end_date": "2025-07-04",
        "file_name": "제4기 예산회계실무 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제4기+예산회계실무+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 5,
        "title": "제7기 급류구조 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "전문교육",
        "residential": "외부합숙",
        "total_participants": "20명",
        "participants_detail": {
            "daejeon": 4,
            "sejong": 1,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-23",
        "end_date": "2025-06-27",
        "file_name": "제7기 급류구조과정 교육 운영계획.pdf",
        "file_path": "./file/제7기+급류구조과정+교육+운영계획.pdf"
    },
    {
        "id": 6,
        "title": "제3기 펌뷸런스대원 기초능력향상 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "24명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 1,
            "chungbuk": 8,
            "chungnam": 13
        },
        "start_date": "2025-06-23",
        "end_date": "2025-07-04",
        "file_name": "제3기 펌뷸런스대원 기초능력향상 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제3기+펌뷸런스대원+기초능력향상+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 7,
        "title": "제5기 재난현장 언론대응 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 1,
            "chungbuk": 3,
            "chungnam": 13
        },
        "start_date": "2025-06-23",
        "end_date": "2025-06-25",
        "file_name": "제5기 재난현장 언론대응 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제5기+재난현장+언론대응+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 8,
        "title": "제30기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "38명",
        "participants_detail": {
            "daejeon": 7,
            "sejong": 3,
            "chungbuk": 12,
            "chungnam": 14,
            "fire_agency": 2
        },
        "start_date": "2025-06-18",
        "end_date": "2025-06-20",
        "file_name": "제30기 소방위 관리역량 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제30기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 9,
        "title": "제4기 위험물 실무 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "30명",
        "participants_detail": {
            "daejeon": 6,
            "sejong": 2,
            "chungbuk": 8,
            "chungnam": 14
        },
        "start_date": "2025-06-16",
        "end_date": "2025-06-20",
        "file_name": "제4기 위험물 실무 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제4기+위험물+실무+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 10,
        "title": "제3기 초급 현장지휘관 자격인증 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "전문교육",
        "residential": "비합숙",
        "total_participants": "13명",
        "participants_detail": {
            "sejong": 1,
            "chungbuk": 6,
            "chungnam": 6
        },
        "start_date": "2025-06-16",
        "end_date": "2025-06-20",
        "file_name": "제3기 초급 현장지휘관 자격인증 과정 교육 운영계획.pdf",
        "file_path": "./file/제3기+초급+현장지휘관+자격인증+과정+교육+운영계획.pdf"
    },
    {
        "id": 11,
        "title": "제29기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-06-19",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "36명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 2,
            "chungbuk": 12,
            "chungnam": 19,
            "fire_agency": 1
        },
        "start_date": "2025-06-16",
        "end_date": "2025-06-18",
        "file_name": "제29기 소방위 관리역량 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제29기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 12,
        "title": "제28기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-06-10",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "36명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 3,
            "chungbuk": 12,
            "chungnam": 17,
            "fire_agency": 2
        },
        "start_date": "2025-06-11",
        "end_date": "2025-06-13",
        "file_name": "제28기 소방위 관리역량 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제28기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 13,
        "title": "제22기 소방드론 자격취득 과정",
        "author": "오진웅",
        "created_date": "2025-06-10",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "13명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 1,
            "chungbuk": 3,
            "chungnam": 6,
            "fire_agency": 1
        },
        "start_date": "2025-06-09",
        "end_date": "2025-07-11",
        "file_name": "제22기 소방드론 자격취득 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제22기+소방드론+자격취득+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 14,
        "title": "제2기 초급 현장지휘관 자격인증 과정",
        "author": "오진웅",
        "created_date": "2025-06-10",
        "type": "전문교육",
        "residential": "비합숙",
        "total_participants": "18명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 1,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-09",
        "end_date": "2025-06-13",
        "file_name": "제2기 초급 현장지휘관 자격인증과정 입교 및 생활안내.pdf",
        "file_path": "./file/제2기+초급+현장지휘관+자격인증과정+입교+및+생활안내.pdf"
    },
    {
        "id": 15,
        "title": "제2기 전문구급소생술(시뮬레이션) 과정",
        "author": "오진웅",
        "created_date": "2025-06-10",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "22명",
        "participants_detail": {
            "daejeon": 4,
            "chungbuk": 7,
            "chungnam": 11
        },
        "start_date": "2025-06-09",
        "end_date": "2025-06-13",
        "file_name": "제2기 전문구급소생술(시뮬레이션) 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제2기+전문구급소생술(시뮬레이션)+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 16,
        "title": "제27기 소방위 관리역량 과정",
        "author": "오진웅",
        "created_date": "2025-06-10",
        "type": "기본교육",
        "residential": "합숙",
        "total_participants": "37명",
        "participants_detail": {
            "daejeon": 5,
            "sejong": 2,
            "chungbuk": 12,
            "chungnam": 17,
            "fire_agency": 1
        },
        "start_date": "2025-06-09",
        "end_date": "2025-06-11",
        "file_name": "제27기 소방위 관리역량 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제27기+소방위+관리역량+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 17,
        "title": "제2기 소방시설 기초(기계) 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "26명",
        "participants_detail": {
            "daejeon": 2,
            "sejong": 1,
            "chungbuk": 9,
            "chungnam": 14
        },
        "start_date": "2025-06-02",
        "end_date": "2025-06-05",
        "file_name": "제2기 소방시설기초(기계) 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제2기+소방시설기초(기계)+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 18,
        "title": "제2기 소방시설 기초(전기) 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "27명",
        "participants_detail": {
            "daejeon": 3,
            "sejong": 2,
            "chungbuk": 8,
            "chungnam": 14
        },
        "start_date": "2025-06-02",
        "end_date": "2025-06-05",
        "file_name": "제2기 소방시설기초(전기) 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제2기+소방시설기초(전기)+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 19,
        "title": "제2기 다수사상자 구급대응 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 1,
            "chungbuk": 7,
            "chungnam": 9
        },
        "start_date": "2025-06-02",
        "end_date": "2025-06-05",
        "file_name": "제2기 다수사상자 구급대응 과정 입교 및 생활안내.pdf",
        "file_path": "./file/제2기+다수사상자+구급대응+과정+입교+및+생활안내.pdf"
    },
    {
        "id": 20,
        "title": "제2기 현장지휘 교육 교관 양성 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-02",
        "end_date": "2025-06-05",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 21,
        "title": "제2기 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-07-11",
        "end_date": "2025-07-11",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 22,
        "title": "제3기 하루날짜 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "전문교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-06",
        "end_date": "2025-06-06",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 23,
        "title": "제3기 신임교육 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "신임교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-06",
        "end_date": "2025-06-07",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 24,
        "title": "제3기 지휘역량 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "지휘역량",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-06",
        "end_date": "2025-06-07",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 25,
        "title": "제3기 보수교육 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "보수교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-29",
        "end_date": "2025-06-30",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
    {
        "id": 26,
        "title": "제3기 대민교육 테스트 과정",
        "author": "오진웅",
        "created_date": "2025-06-04",
        "type": "대민교육",
        "residential": "비합숙",
        "total_participants": "17명",
        "participants_detail": {
            "daejeon": 2,
            "chungbuk": 6,
            "chungnam": 9
        },
        "start_date": "2025-06-29",
        "end_date": "2025-06-30",
        "file_name": "제1기 현장지휘교육 교관 양성과정 입교 및 생활안내.pdf",
        "file_path": "./file/제1기+현장지휘교육+교관+양성과정+입교+및+생활안내.pdf"
    },
]