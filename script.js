// dados das competições
const categories = [
    {
        id: 1,
        name: "Atletismo",
        selected: false,
        sessions: [
            {
                name: "Atletismo - ATH01",
                startTime: new Date("2024-08-01T07:30"),
                endTime: new Date("2024-08-01T11:45"),
            },
            {
                name: "Atletismo - ATH02",
                startTime: new Date("2024-08-02T10:00"),
                endTime: new Date("2024-08-02T13:00"),
            },
            {
                name: "Atletismo - ATH03",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:00"),
            },
            {
                name: "Atletismo - ATH04",
                startTime: new Date("2024-08-03T10:00"),
                endTime: new Date("2024-08-03T16:00"),
            },
            {
                name: "Atletismo - ATH05",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:00"),
            },
            {
                name: "Atletismo - ATH06",
                startTime: new Date("2024-08-04T10:00"),
                endTime: new Date("2024-08-04T13:00"),
            },
            {
                name: "Atletismo - ATH07",
                startTime: new Date("2024-08-04T19:00"),
                endTime: new Date("2024-08-04T22:00"),
            },
            {
                name: "Atletismo - ATH08",
                startTime: new Date("2024-08-05T10:00"),
                endTime: new Date("2024-08-05T13:00"),
            },
            {
                name: "Atletismo - ATH09",
                startTime: new Date("2024-08-05T19:00"),
                endTime: new Date("2024-08-05T22:00"),
            },
            {
                name: "Atletismo - ATH10",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T13:00"),
            },
            {
                name: "Atletismo - ATH11",
                startTime: new Date("2024-08-06T19:00"),
                endTime: new Date("2024-08-06T22:00"),
            },
            {
                name: "Atletismo - ATH12",
                startTime: new Date("2024-08-07T07:30"),
                endTime: new Date("2024-08-07T11:00"),
            },
            {
                name: "Atletismo - ATH13",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T13:00"),
            },
            {
                name: "Atletismo - ATH14",
                startTime: new Date("2024-08-07T19:00"),
                endTime: new Date("2024-08-07T22:00"),
            },
            {
                name: "Atletismo - ATH15",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:00"),
            },
            {
                name: "Atletismo - ATH16",
                startTime: new Date("2024-08-08T19:00"),
                endTime: new Date("2024-08-08T22:00"),
            },
            {
                name: "Atletismo - ATH17",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T13:00"),
            },
            {
                name: "Atletismo - ATH18",
                startTime: new Date("2024-08-09T19:00"),
                endTime: new Date("2024-08-09T22:00"),
            },
            {
                name: "Atletismo - ATH19",
                startTime: new Date("2024-08-10T08:00"),
                endTime: new Date("2024-08-10T11:15"),
            },
            {
                name: "Atletismo - ATH20",
                startTime: new Date("2024-08-10T19:00"),
                endTime: new Date("2024-08-10T22:00"),
            },
            {
                name: "Atletismo - ATH21",
                startTime: new Date("2024-08-11T08:00"),
                endTime: new Date("2024-08-11T11:30"),
            },
        ],
    },
    {
        id: 2,
        name: "Badminton",
        selected: false,
        sessions: [
            {
                name: "Badminton - BDM01",
                startTime: new Date("2024-07-27T08:30"),
                endTime: new Date("2024-07-27T12:00"),
            },
            {
                name: "Badminton - BDM02",
                startTime: new Date("2024-07-27T14:00"),
                endTime: new Date("2024-07-27T17:30"),
            },
            {
                name: "Badminton - BDM03",
                startTime: new Date("2024-07-27T19:30"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "Badminton - BDM04",
                startTime: new Date("2024-07-28T08:30"),
                endTime: new Date("2024-07-28T12:00"),
            },
            {
                name: "Badminton - BDM05",
                startTime: new Date("2024-07-28T14:00"),
                endTime: new Date("2024-07-28T17:30"),
            },
            {
                name: "Badminton - BDM06",
                startTime: new Date("2024-07-28T19:30"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "Badminton - BDM07",
                startTime: new Date("2024-07-29T08:30"),
                endTime: new Date("2024-07-29T12:00"),
            },
            {
                name: "Badminton - BDM08",
                startTime: new Date("2024-07-29T14:00"),
                endTime: new Date("2024-07-29T17:30"),
            },
            {
                name: "Badminton - BDM09",
                startTime: new Date("2024-07-29T19:30"),
                endTime: new Date("2024-07-29T23:00"),
            },
            {
                name: "Badminton - BDM10",
                startTime: new Date("2024-07-30T08:30"),
                endTime: new Date("2024-07-30T12:00"),
            },
            {
                name: "Badminton - BDM11",
                startTime: new Date("2024-07-30T14:00"),
                endTime: new Date("2024-07-30T17:30"),
            },
            {
                name: "Badminton - BDM12",
                startTime: new Date("2024-07-30T19:30"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Badminton - BDM13",
                startTime: new Date("2024-07-31T08:30"),
                endTime: new Date("2024-07-31T12:00"),
            },
            {
                name: "Badminton - BDM14",
                startTime: new Date("2024-07-31T14:00"),
                endTime: new Date("2024-07-31T17:30"),
            },
            {
                name: "Badminton - BDM15",
                startTime: new Date("2024-07-31T19:30"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Badminton - BDM16",
                startTime: new Date("2024-08-01T08:30"),
                endTime: new Date("2024-08-01T11:00"),
            },
            {
                name: "Badminton - BDM17",
                startTime: new Date("2024-08-01T13:00"),
                endTime: new Date("2024-08-01T16:30"),
            },
            {
                name: "Badminton - BDM18",
                startTime: new Date("2024-08-01T18:30"),
                endTime: new Date("2024-08-01T23:00"),
            },
            {
                name: "Badminton - BDM19",
                startTime: new Date("2024-08-02T08:30"),
                endTime: new Date("2024-08-02T13:00"),
            },
            {
                name: "Badminton - BDM20",
                startTime: new Date("2024-08-02T15:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
            {
                name: "Badminton - BDM21",
                startTime: new Date("2024-08-03T08:30"),
                endTime: new Date("2024-08-03T13:00"),
            },
            {
                name: "Badminton - BDM22",
                startTime: new Date("2024-08-03T15:00"),
                endTime: new Date("2024-08-03T17:30"),
            },
            {
                name: "Badminton - BDM23",
                startTime: new Date("2024-08-04T08:30"),
                endTime: new Date("2024-08-04T13:00"),
            },
            {
                name: "Badminton - BDM24",
                startTime: new Date("2024-08-04T15:00"),
                endTime: new Date("2024-08-04T17:30"),
            },
            {
                name: "Badminton - BDM25",
                startTime: new Date("2024-08-05T09:45"),
                endTime: new Date("2024-08-05T12:30"),
            },
            {
                name: "Badminton - BDM26",
                startTime: new Date("2024-08-05T14:30"),
                endTime: new Date("2024-08-05T17:30"),
            },
        ],
    },
    {
        id: 3,
        name: "Basquetebol 3X3",
        selected: false,
        sessions: [
            {
                name: "Basquete 3X3 - BK301",
                startTime: new Date("2024-07-30T17:30"),
                endTime: new Date("2024-07-30T19:30"),
            },
            {
                name: "Basquete 3X3 - BK302",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Basquete 3X3 - BK303",
                startTime: new Date("2024-07-31T17:30"),
                endTime: new Date("2024-07-31T19:30"),
            },
            {
                name: "Basquete 3X3 - BK304",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Basquete 3X3 - BK305",
                startTime: new Date("2024-08-01T09:00"),
                endTime: new Date("2024-08-01T11:00"),
            },
            {
                name: "Basquete 3X3 - BK306",
                startTime: new Date("2024-08-01T12:30"),
                endTime: new Date("2024-08-01T14:30"),
            },
            {
                name: "Basquete 3X3 - BK307",
                startTime: new Date("2024-08-01T18:00"),
                endTime: new Date("2024-08-01T20:00"),
            },
            {
                name: "Basquete 3X3 - BK308",
                startTime: new Date("2024-08-01T21:30"),
                endTime: new Date("2024-08-01T23:30"),
            },
            {
                name: "Basquete 3X3 - BK309",
                startTime: new Date("2024-08-02T09:00"),
                endTime: new Date("2024-08-02T11:00"),
            },
            {
                name: "Basquete 3X3 - BK310",
                startTime: new Date("2024-08-02T12:30"),
                endTime: new Date("2024-08-02T14:30"),
            },
            {
                name: "Basquete 3X3 - BK311",
                startTime: new Date("2024-08-02T17:30"),
                endTime: new Date("2024-08-02T19:30"),
            },
            {
                name: "Basquete 3X3 - BK312",
                startTime: new Date("2024-08-02T21:00"),
                endTime: new Date("2024-08-02T23:00"),
            },
            {
                name: "Basquete 3X3 - BK313",
                startTime: new Date("2024-08-03T17:30"),
                endTime: new Date("2024-08-03T19:30"),
            },
            {
                name: "Basquete 3X3 - BK314",
                startTime: new Date("2024-08-03T21:30"),
                endTime: new Date("2024-08-03T23:30"),
            },
            {
                name: "Basquete 3X3 - BK315",
                startTime: new Date("2024-08-04T17:30"),
                endTime: new Date("2024-08-04T19:30"),
            },
            {
                name: "Basquete 3X3 - BK316",
                startTime: new Date("2024-08-04T21:30"),
                endTime: new Date("2024-08-04T23:30"),
            },
            {
                name: "Basquete 3X3 - BK317",
                startTime: new Date("2024-08-05T17:30"),
                endTime: new Date("2024-08-05T19:30"),
            },
            {
                name: "Basquete 3X3 - BK318",
                startTime: new Date("2024-08-05T21:00"),
                endTime: new Date("2024-08-05T23:20"),
            },
        ],
    },
    {
        id: 4,
        name: "Breaking",
        selected: false,
        sessions: [
            {
                name: "Breaking - BKG01",
                startTime: new Date("2024-08-09T16:00"),
                endTime: new Date("2024-08-09T18:00"),
            },
            {
                name: "Breaking - BKG02",
                startTime: new Date("2024-08-09T20:00"),
                endTime: new Date("2024-08-09T22:00"),
            },
            {
                name: "Breaking - BKG03",
                startTime: new Date("2024-08-10T16:00"),
                endTime: new Date("2024-08-10T18:00"),
            },
            {
                name: "Breaking - BKG04",
                startTime: new Date("2024-08-10T20:00"),
                endTime: new Date("2024-08-10T22:00"),
            },
        ],
    },
    {
        id: 5,
        name: "BMX Freestyle",
        selected: false,
        sessions: [
            {
                name: "BMX Freestyle - BMF01",
                startTime: new Date("2024-07-30T13:25"),
                endTime: new Date("2024-07-30T16:30"),
            },
            {
                name: "BMX Freestyle - BMF02",
                startTime: new Date("2024-07-31T13:10"),
                endTime: new Date("2024-07-31T16:30"),
            },
        ],
    },
    {
        id: 6,
        name: "BMX Racing",
        selected: false,
        sessions: [
            {
                name: "BMX Racing - BMX01",
                startTime: new Date("2024-08-01T20:00"),
                endTime: new Date("2024-08-01T22:20"),
            },
            {
                name: "BMX Racing - BMX02",
                startTime: new Date("2024-08-02T20:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
        ],
    },
    {
        id: 7,
        name: "Tiro com Arco",
        selected: false,
        sessions: [
            {
                name: "Tiro com Arco - ARC01",
                startTime: new Date("2024-07-25T09:30"),
                endTime: new Date("2024-07-25T12:30"),
            },
            {
                name: "Tiro com Arco - ARC02",
                startTime: new Date("2024-07-25T14:15"),
                endTime: new Date("2024-07-25T17:15"),
            },
            {
                name: "Tiro com Arco - ARC03",
                startTime: new Date("2024-07-28T09:30"),
                endTime: new Date("2024-07-28T11:05"),
            },
            {
                name: "Tiro com Arco - ARC04",
                startTime: new Date("2024-07-28T14:15"),
                endTime: new Date("2024-07-28T17:55"),
            },
            {
                name: "Tiro com Arco - ARC05",
                startTime: new Date("2024-07-29T09:30"),
                endTime: new Date("2024-07-29T11:05"),
            },
            {
                name: "Tiro com Arco - ARC06",
                startTime: new Date("2024-07-29T14:15"),
                endTime: new Date("2024-07-29T17:55"),
            },
            {
                name: "Tiro com Arco - ARC07",
                startTime: new Date("2024-07-30T12:00"),
                endTime: new Date("2024-07-30T15:55"),
            },
            {
                name: "Tiro com Arco - ARC08",
                startTime: new Date("2024-07-30T17:45"),
                endTime: new Date("2024-07-30T20:25"),
            },
            {
                name: "Tiro com Arco - ARC09",
                startTime: new Date("2024-07-31T12:00"),
                endTime: new Date("2024-07-31T15:55"),
            },
            {
                name: "Tiro com Arco - ARC10",
                startTime: new Date("2024-07-31T17:45"),
                endTime: new Date("2024-07-31T20:25"),
            },
            {
                name: "Tiro com Arco - ARC11",
                startTime: new Date("2024-08-01T09:30"),
                endTime: new Date("2024-08-01T13:25"),
            },
            {
                name: "Tiro com Arco - ARC12",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T19:25"),
            },
            {
                name: "Tiro com Arco - ARC13",
                startTime: new Date("2024-08-02T09:30"),
                endTime: new Date("2024-08-02T12:05"),
            },
            {
                name: "Tiro com Arco - ARC14",
                startTime: new Date("2024-08-02T14:15"),
                endTime: new Date("2024-08-02T17:25"),
            },
            {
                name: "Tiro com Arco - ARC15",
                startTime: new Date("2024-08-03T09:30"),
                endTime: new Date("2024-08-03T11:15"),
            },
            {
                name: "Tiro com Arco - ARC16",
                startTime: new Date("2024-08-03T13:00"),
                endTime: new Date("2024-08-03T15:20"),
            },
            {
                name: "Tiro com Arco - ARC17",
                startTime: new Date("2024-08-04T09:30"),
                endTime: new Date("2024-08-04T11:15"),
            },
            {
                name: "Tiro com Arco - ARC18",
                startTime: new Date("2024-08-04T13:00"),
                endTime: new Date("2024-08-04T15:20"),
            },
        ],
    },
    {
        id: 8,
        name: "Boxe",
        selected: false,
        sessions: [
            {
                name: "Boxe - BOX01",
                startTime: new Date("2024-07-27T15:30"),
                endTime: new Date("2024-07-27T17:30"),
            },
            {
                name: "Boxe - BOX02",
                startTime: new Date("2024-07-27T20:00"),
                endTime: new Date("2024-07-27T22:15"),
            },
            {
                name: "Boxe - BOX03",
                startTime: new Date("2024-07-28T11:00"),
                endTime: new Date("2024-07-28T13:00"),
            },
            {
                name: "Boxe - BOX04",
                startTime: new Date("2024-07-28T15:30"),
                endTime: new Date("2024-07-28T17:45"),
            },
            {
                name: "Boxe - BOX05",
                startTime: new Date("2024-07-28T20:00"),
                endTime: new Date("2024-07-28T22:00"),
            },
            {
                name: "Boxe - BOX06",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T13:00"),
            },
            {
                name: "Boxe - BOX07",
                startTime: new Date("2024-07-29T15:30"),
                endTime: new Date("2024-07-29T17:30"),
            },
            {
                name: "Boxe - BOX08",
                startTime: new Date("2024-07-29T20:00"),
                endTime: new Date("2024-07-29T22:00"),
            },
            {
                name: "Boxe - BOX09",
                startTime: new Date("2024-07-30T11:00"),
                endTime: new Date("2024-07-30T13:30"),
            },
            {
                name: "Boxe - BOX10",
                startTime: new Date("2024-07-30T15:30"),
                endTime: new Date("2024-07-30T18:00"),
            },
            {
                name: "Boxe - BOX11",
                startTime: new Date("2024-07-30T20:00"),
                endTime: new Date("2024-07-30T22:30"),
            },
            {
                name: "Boxe - BOX12",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T13:15"),
            },
            {
                name: "Boxe - BOX13",
                startTime: new Date("2024-07-31T15:30"),
                endTime: new Date("2024-07-31T18:00"),
            },
            {
                name: "Boxe - BOX14",
                startTime: new Date("2024-07-31T20:00"),
                endTime: new Date("2024-07-31T22:15"),
            },
            {
                name: "Boxe - BOX15",
                startTime: new Date("2024-08-01T11:00"),
                endTime: new Date("2024-08-01T13:15"),
            },
            {
                name: "Boxe - BOX16",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T18:00"),
            },
            {
                name: "Boxe - BOX17",
                startTime: new Date("2024-08-01T20:00"),
                endTime: new Date("2024-08-01T22:15"),
            },
            {
                name: "Boxe - BOX18",
                startTime: new Date("2024-08-02T15:30"),
                endTime: new Date("2024-08-02T18:00"),
            },
            {
                name: "Boxe - BOX19",
                startTime: new Date("2024-08-02T20:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
            {
                name: "Boxe - BOX20",
                startTime: new Date("2024-08-03T15:30"),
                endTime: new Date("2024-08-03T17:45"),
            },
            {
                name: "Boxe - BOX21",
                startTime: new Date("2024-08-03T20:00"),
                endTime: new Date("2024-08-03T22:15"),
            },
            {
                name: "Boxe - BOX22",
                startTime: new Date("2024-08-04T11:00"),
                endTime: new Date("2024-08-04T13:15"),
            },
            {
                name: "Boxe - BOX23",
                startTime: new Date("2024-08-04T15:30"),
                endTime: new Date("2024-08-04T17:45"),
            },
            {
                name: "Boxe - BOX24",
                startTime: new Date("2024-08-06T21:30"),
                endTime: new Date("2024-08-06T23:30"),
            },
            {
                name: "Boxe - BOX25",
                startTime: new Date("2024-08-07T21:30"),
                endTime: new Date("2024-08-07T23:30"),
            },
            {
                name: "Boxe - BOX26",
                startTime: new Date("2024-08-08T21:30"),
                endTime: new Date("2024-08-08T23:30"),
            },
            {
                name: "Boxe - BOX27",
                startTime: new Date("2024-08-09T21:30"),
                endTime: new Date("2024-08-09T23:30"),
            },
            {
                name: "Boxe - BOX28",
                startTime: new Date("2024-08-10T21:30"),
                endTime: new Date("2024-08-10T23:30"),
            }
        ]
    },
    {
        id: 9,
        name: "Canoagem Slalom",
        selected: false,
        sessions: [
            {
                name: "Canoagem Slalom - CSL01",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T19:10"),
            },
            {
                name: "Canoagem Slalom - CSL02",
                startTime: new Date("2024-07-28T15:30"),
                endTime: new Date("2024-07-28T18:50"),
            },
            {
                name: "Canoagem Slalom - CSL03",
                startTime: new Date("2024-07-29T15:30"),
                endTime: new Date("2024-07-29T18:30"),
            },
            {
                name: "Canoagem Slalom - CSL04",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T19:10"),
            },
            {
                name: "Canoagem Slalom - CSL05",
                startTime: new Date("2024-07-31T15:30"),
                endTime: new Date("2024-07-31T18:30"),
            },
            {
                name: "Canoagem Slalom - CSL06",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T18:35"),
            },
            {
                name: "Canoagem Slalom - CSL07",
                startTime: new Date("2024-08-03T15:30"),
                endTime: new Date("2024-08-03T18:30"),
            },
            {
                name: "Canoagem Slalom - CSL08",
                startTime: new Date("2024-08-04T15:30"),
                endTime: new Date("2024-08-04T17:25"),
            },
            {
                name: "Canoagem Slalom - CSL09",
                startTime: new Date("2024-08-05T15:30"),
                endTime: new Date("2024-08-05T17:30"),
            }
        ]
    },
    {
        id: 10,
        name: "Canoagem Sprint",
        selected: false,
        sessions: [
            {
                name: "Canoagem Sprint - CSP01",
                startTime: new Date("2024-08-06T09:30"),
                endTime: new Date("2024-08-06T15:10"),
            },
            {
                name: "Canoagem Sprint - CSP02",
                startTime: new Date("2024-08-07T09:30"),
                endTime: new Date("2024-08-07T14:50"),
            },
            {
                name: "Canoagem Sprint - CSP03",
                startTime: new Date("2024-08-08T10:30"),
                endTime: new Date("2024-08-08T14:30"),
            },
            {
                name: "Canoagem Sprint - CSP04",
                startTime: new Date("2024-08-09T10:30"),
                endTime: new Date("2024-08-09T14:20"),
            },
            {
                name: "Canoagem Sprint - CSP05",
                startTime: new Date("2024-08-10T09:30"),
                endTime: new Date("2024-08-10T13:10"),
            }
        ]
    },
    {
        id: 11,
        name: "Ciclismo de Estrada",
        selected: false,
        sessions: [
            {
                name: "Ciclismo de Estrada - CRD01",
                startTime: new Date("2024-07-27T14:30"),
                endTime: new Date("2024-07-27T18:30"),
            },
            {
                name: "Ciclismo de Estrada - CRD02",
                startTime: new Date("2024-08-03T11:00"),
                endTime: new Date("2024-08-03T18:15"),
            },
            {
                name: "Ciclismo de Estrada - CRD03",
                startTime: new Date("2024-08-04T14:00"),
                endTime: new Date("2024-08-04T18:45"),
            }
        ]
    },
    {
        id: 12,
        name: "Ciclismo de Pista",
        selected: false,
        sessions: [
            {
                name: "Ciclismo de Pista - CTR01",
                startTime: new Date("2024-08-05T17:00"),
                endTime: new Date("2024-08-05T19:40"),
            },
            {
                name: "Ciclismo de Pista - CTR02",
                startTime: new Date("2024-08-06T17:30"),
                endTime: new Date("2024-08-06T19:55"),
            },
            {
                name: "Ciclismo de Pista - CTR03",
                startTime: new Date("2024-08-07T12:45"),
                endTime: new Date("2024-08-07T15:30"),
            },
            {
                name: "Ciclismo de Pista - CTR04",
                startTime: new Date("2024-08-07T17:30"),
                endTime: new Date("2024-08-07T19:50"),
            },
            {
                name: "Ciclismo de Pista - CTR05",
                startTime: new Date("2024-08-08T17:00"),
                endTime: new Date("2024-08-08T19:55"),
            },
            {
                name: "Ciclismo de Pista - CTR06",
                startTime: new Date("2024-08-09T14:00"),
                endTime: new Date("2024-08-09T15:45"),
            },
            {
                name: "Ciclismo de Pista - CTR07",
                startTime: new Date("2024-08-09T18:00"),
                endTime: new Date("2024-08-09T19:55"),
            },
            {
                name: "Ciclismo de Pista - CTR08",
                startTime: new Date("2024-08-10T17:00"),
                endTime: new Date("2024-08-10T19:50"),
            },
            {
                name: "Ciclismo de Pista - CTR09",
                startTime: new Date("2024-08-11T11:00"),
                endTime: new Date("2024-08-11T14:15"),
            }
        ]
    },
    {
        id: 13,
        name: "Escalada Esportiva",
        selected: false,
        sessions: [
            {
                name: "Escalada Esportiva - CLB01",
                startTime: new Date("2024-08-05T10:00"),
                endTime: new Date("2024-08-05T14:00"),
            },
            {
                name: "Escalada Esportiva - CLB02",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T14:00"),
            },
            {
                name: "Escalada Esportiva - CLB03",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T13:15"),
            },
            {
                name: "Escalada Esportiva - CLB04",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:15"),
            },
            {
                name: "Escalada Esportiva - CLB05",
                startTime: new Date("2024-08-09T10:15"),
                endTime: new Date("2024-08-09T13:20"),
            },
            {
                name: "Escalada Esportiva - CLB06",
                startTime: new Date("2024-08-10T10:15"),
                endTime: new Date("2024-08-10T13:20"),
            }
        ]
    },
    {
        id: 14,
        name: "Salto Ornamental",
        selected: false,
        sessions: [
            {
                name: "Salto Ornamental - DIV01",
                startTime: new Date("2024-07-27T11:00"),
                endTime: new Date("2024-07-27T12:00"),
            },
            {
                name: "Salto Ornamental - DIV02",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T12:00"),
            },
            {
                name: "Salto Ornamental - DIV03",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T12:00"),
            },
            {
                name: "Salto Ornamental - DIV04",
                startTime: new Date("2024-08-02T11:00"),
                endTime: new Date("2024-08-02T12:00"),
            },
            {
                name: "Salto Ornamental - DIV05",
                startTime: new Date("2024-08-05T09:45"),
                endTime: new Date("2024-08-05T12:00"),
            },
            {
                name: "Salto Ornamental - DIV06",
                startTime: new Date("2024-08-05T15:00"),
                endTime: new Date("2024-08-05T17:00"),
            },
            {
                name: "Salto Ornamental - DIV07",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T12:00"),
            },
            {
                name: "Salto Ornamental - DIV08",
                startTime: new Date("2024-08-06T15:00"),
                endTime: new Date("2024-08-06T17:00"),
            },
            {
                name: "Salto Ornamental - DIV09",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T12:00"),
            },
            {
                name: "Salto Ornamental - DIV10",
                startTime: new Date("2024-08-07T15:00"),
                endTime: new Date("2024-08-07T17:00"),
            },
            {
                name: "Salto Ornamental - DIV11",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T12:00"),
            },
            {
                name: "Salto Ornamental - DIV12",
                startTime: new Date("2024-08-08T15:00"),
                endTime: new Date("2024-08-08T17:00"),
            },
            {
                name: "Salto Ornamental - DIV13",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T12:00"),
            },
            {
                name: "Salto Ornamental - DIV14",
                startTime: new Date("2024-08-09T15:00"),
                endTime: new Date("2024-08-09T17:00"),
            },
            {
                name: "Salto Ornamental - DIV15",
                startTime: new Date("2024-08-10T10:00"),
                endTime: new Date("2024-08-10T12:00"),
            },
            {
                name: "Salto Ornamental - DIV16",
                startTime: new Date("2024-08-10T15:00"),
                endTime: new Date("2024-08-10T17:00"),
            }
        ]
    },
    {
        id: 15,
        name: "Hipismo",
        selected: false,
        sessions: [
            {
                name: "Hipismo - EQU01",
                startTime: new Date("2024-07-27T10:00"),
                endTime: new Date("2024-07-27T18:40"),
            },
            {
                name: "Hipismo - EQU02",
                startTime: new Date("2024-07-28T10:30"),
                endTime: new Date("2024-07-28T15:00"),
            },
            {
                name: "Hipismo - EQU03",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T16:30"),
            },
            {
                name: "Hipismo - EQU04",
                startTime: new Date("2024-07-30T11:00"),
                endTime: new Date("2024-07-30T16:00"),
            },
            {
                name: "Hipismo - EQU05",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T16:00"),
            },
            {
                name: "Hipismo - EQU06",
                startTime: new Date("2024-08-01T10:00"),
                endTime: new Date("2024-08-01T15:45"),
            },
            {
                name: "Hipismo - EQU07",
                startTime: new Date("2024-08-02T14:00"),
                endTime: new Date("2024-08-02T17:45"),
            },
            {
                name: "Hipismo - EQU08",
                startTime: new Date("2024-08-03T10:00"),
                endTime: new Date("2024-08-03T12:30"),
            },
            {
                name: "Hipismo - EQU09",
                startTime: new Date("2024-08-04T11:00"),
                endTime: new Date("2024-08-04T15:30"),
            },
            {
                name: "Hipismo - EQU10",
                startTime: new Date("2024-08-05T11:00"),
                endTime: new Date("2024-08-05T13:45"),
            },
            {
                name: "Hipismo - EQU11",
                startTime: new Date("2024-08-06T14:00"),
                endTime: new Date("2024-08-06T16:30"),
            }
        ]
    },
    {
        id: 16,
        name: "Futebol",
        selected: false,
        sessions: [
            {
                name: "Futebol - FBL01",
                startTime: new Date("2024-07-24T15:00"),
                endTime: new Date("2024-07-24T17:00"),
            },
            {
                name: "Futebol - FBL02",
                startTime: new Date("2024-07-24T15:00"),
                endTime: new Date("2024-07-24T17:00"),
            },
            {
                name: "Futebol - FBL03",
                startTime: new Date("2024-07-24T17:00"),
                endTime: new Date("2024-07-24T19:00"),
            },
            {
                name: "Futebol - FBL04",
                startTime: new Date("2024-07-24T17:00"),
                endTime: new Date("2024-07-24T19:00"),
            },
            {
                name: "Futebol - FBL05",
                startTime: new Date("2024-07-24T19:00"),
                endTime: new Date("2024-07-24T21:00"),
            },
            {
                name: "Futebol - FBL06",
                startTime: new Date("2024-07-24T19:00"),
                endTime: new Date("2024-07-24T21:00"),
            },
            {
                name: "Futebol - FBL07",
                startTime: new Date("2024-07-24T21:00"),
                endTime: new Date("2024-07-24T23:00"),
            },
            {
                name: "Futebol - FBL08",
                startTime: new Date("2024-07-24T21:00"),
                endTime: new Date("2024-07-24T23:00"),
            },
            {
                name: "Futebol - FBL09",
                startTime: new Date("2024-07-25T17:00"),
                endTime: new Date("2024-07-25T19:00"),
            },
            {
                name: "Futebol - FBL10",
                startTime: new Date("2024-07-25T17:00"),
                endTime: new Date("2024-07-25T19:00"),
            },
            {
                name: "Futebol - FBL11",
                startTime: new Date("2024-07-25T19:00"),
                endTime: new Date("2024-07-25T21:00"),
            },
            {
                name: "Futebol - FBL12",
                startTime: new Date("2024-07-25T19:00"),
                endTime: new Date("2024-07-25T21:00"),
            },
            {
                name: "Futebol - FBL13",
                startTime: new Date("2024-07-25T21:00"),
                endTime: new Date("2024-07-25T23:00"),
            },
            {
                name: "Futebol - FBL14",
                startTime: new Date("2024-07-25T21:00"),
                endTime: new Date("2024-07-25T23:00"),
            },
            {
                name: "Futebol - FBL15",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T17:00"),
            },
            {
                name: "Futebol - FBL16",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T17:00"),
            },
            {
                name: "Futebol - FBL17",
                startTime: new Date("2024-07-27T17:00"),
                endTime: new Date("2024-07-27T19:00"),
            },
            {
                name: "Futebol - FBL18",
                startTime: new Date("2024-07-27T17:00"),
                endTime: new Date("2024-07-27T19:00"),
            },
            {
                name: "Futebol - FBL19",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T21:00"),
            },
            {
                name: "Futebol - FBL20",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T21:00"),
            },
            {
                name: "Futebol - FBL21",
                startTime: new Date("2024-07-27T21:00"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "Futebol - FBL22",
                startTime: new Date("2024-07-27T21:00"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "Futebol - FBL23",
                startTime: new Date("2024-07-28T17:00"),
                endTime: new Date("2024-07-28T19:00"),
            },
            {
                name: "Futebol - FBL24",
                startTime: new Date("2024-07-28T17:00"),
                endTime: new Date("2024-07-28T19:00"),
            },
            {
                name: "Futebol - FBL25",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T21:00"),
            },
            {
                name: "Futebol - FBL26",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T21:00"),
            },
            {
                name: "Futebol - FBL27",
                startTime: new Date("2024-07-28T21:00"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "Futebol - FBL28",
                startTime: new Date("2024-07-28T21:00"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "Futebol - FBL29",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T17:00"),
            },
            {
                name: "Futebol - FBL30",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T17:00"),
            },
            {
                name: "Futebol - FBL31",
                startTime: new Date("2024-07-30T17:00"),
                endTime: new Date("2024-07-30T19:00"),
            },
            {
                name: "Futebol - FBL32",
                startTime: new Date("2024-07-30T17:00"),
                endTime: new Date("2024-07-30T19:00"),
            },
            {
                name: "Futebol - FBL33",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T21:00"),
            },
            {
                name: "Futebol - FBL34",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T21:00"),
            },
            {
                name: "Futebol - FBL35",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Futebol - FBL36",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Futebol - FBL37",
                startTime: new Date("2024-07-31T17:00"),
                endTime: new Date("2024-07-31T19:00"),
            },
            {
                name: "Futebol - FBL38",
                startTime: new Date("2024-07-31T17:00"),
                endTime: new Date("2024-07-31T19:00"),
            },
            {
                name: "Futebol - FBL39",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T21:00"),
            },
            {
                name: "Futebol - FBL40",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T21:00"),
            },
            {
                name: "Futebol - FBL41",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Futebol - FBL42",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Futebol - FBL43",
                startTime: new Date("2024-08-02T15:00"),
                endTime: new Date("2024-08-02T18:00"),
            },
            {
                name: "Futebol - FBL44",
                startTime: new Date("2024-08-02T17:00"),
                endTime: new Date("2024-08-02T20:00"),
            },
            {
                name: "Futebol - FBL45",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:00"),
            },
            {
                name: "Futebol - FBL46",
                startTime: new Date("2024-08-02T21:00"),
                endTime: new Date("2024-08-02T23:59"),
            },
            {
                name: "Futebol - FBL47",
                startTime: new Date("2024-08-03T15:00"),
                endTime: new Date("2024-08-03T18:00"),
            },
            {
                name: "Futebol - FBL48",
                startTime: new Date("2024-08-03T17:00"),
                endTime: new Date("2024-08-03T20:00"),
            },
            {
                name: "Futebol - FBL49",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:00"),
            },
            {
                name: "Futebol - FBL50",
                startTime: new Date("2024-08-03T21:00"),
                endTime: new Date("2024-08-03T23:59"),
            },
            {
                name: "Futebol - FBL51",
                startTime: new Date("2024-08-05T18:00"),
                endTime: new Date("2024-08-05T21:00"),
            },
            {
                name: "Futebol - FBL52",
                startTime: new Date("2024-08-05T21:00"),
                endTime: new Date("2024-08-05T23:59"),
            },
            {
                name: "Futebol - FBL53",
                startTime: new Date("2024-08-06T18:00"),
                endTime: new Date("2024-08-06T21:00"),
            },
            {
                name: "Futebol - FBL54",
                startTime: new Date("2024-08-06T21:00"),
                endTime: new Date("2024-08-06T23:59"),
            },
            {
                name: "Futebol - FBL55",
                startTime: new Date("2024-08-08T17:00"),
                endTime: new Date("2024-08-08T20:00"),
            },
            {
                name: "Futebol - FBL56",
                startTime: new Date("2024-08-09T15:00"),
                endTime: new Date("2024-08-09T18:00"),
            },
            {
                name: "Futebol - FBL57",
                startTime: new Date("2024-08-09T18:00"),
                endTime: new Date("2024-08-09T21:30"),
            },
            {
                name: "Futebol - FBL58",
                startTime: new Date("2024-08-10T17:00"),
                endTime: new Date("2024-08-10T20:30"),
            }
        ]
    }
];

// função para renderizar os dados na lista
function renderCategoryList() {
    const lista = document.getElementById('categoryList');

    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add("list-group-item");
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'categoryCheckbox';
        checkbox.value = category.id;
        checkbox.checked = category.selected;
        const label = document.createElement('label');
        label.textContent = " " + category.name;
        label.htmlFor = checkbox.value;
        li.appendChild(checkbox);
        li.appendChild(label);
        li.classList.add("list-group-item");
        lista.appendChild(li);
    });
}

// função para formatar a hora
function formatTime(dateString) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString('pt-BR', options);
}

// função para formatar a data
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

const showSelectedButton = document.getElementById('showSelectedButton');
const selectedCategoriesDiv = document.getElementById('selectedCategories');

// função para mostrar as modalidades selecionadas com o interval scheduling
function showSelectedCategories() {
    selectedCategoriesDiv.innerHTML = ''; // Limpar o conteúdo anterior

    // cria um array com as modalidades selecionadas
    const selectedCategories = categories.filter(category => {
        const checkbox = document.querySelector(`input[value="${category.id}"]`);
        return checkbox.checked;
    });

    if (selectedCategories.length === 0) {
        selectedCategoriesDiv.textContent = 'Nenhuma categoria selecionada.';
    } else {

        // INTERVAL SCHEDULING

        // passo 1: ordenando as sessões em ordem crescente de finish time
        const sortedSessions = [].concat(
            ...selectedCategories.map(category => category.sessions)
        );
        sortedSessions.sort((a, b) => a.endTime - b.endTime);


        // passo 2: adicionando a um conjunto as sessões compatíveis
        const scheduledSessions = {};
        let lastSession = null;


        // Adiciona apenas a primeira sessão
        if (sortedSessions.length > 0) {
            const firstSession = sortedSessions[0];
            lastSession = firstSession;
            scheduledSessions[firstSession.name] = firstSession;
        }

        // Adiciona as sessões compatíveis
        for (let i = 1; i < sortedSessions.length; i++) {
            const currentSession = sortedSessions[i];
            if (currentSession.startTime >= lastSession.endTime) {
                scheduledSessions[currentSession.name] = currentSession;
                lastSession = currentSession;
            }
        }

        let lastDate = "01/01/2024";

        // imprime as sessões selecionadas
        const selectedCategoriesList = document.createElement('ul');
        for (const sessionName in scheduledSessions) {
            const session = scheduledSessions[sessionName];
            const li = document.createElement('li');
            li.classList.add("list-group-item");

            let currentDate = null;
            currentDate = formatDate(session.startTime);

            // Adiciona a data se ela existir
            if (currentDate !== lastDate) {
                lastDate = currentDate;
                const dateInfo = document.createElement('h5');
                dateInfo.textContent = `${lastDate}`;
                li.appendChild(dateInfo);
            }

            const sessionInfo = document.createElement('p');
            sessionInfo.textContent = `- ${session.name}: ${formatTime(session.startTime)}h - ${formatTime(session.endTime)}h`;
            li.appendChild(sessionInfo);

            selectedCategoriesList.appendChild(li);
        }
        selectedCategoriesDiv.appendChild(selectedCategoriesList);
    }
}

// Chame a função para renderizar a lista quando a página carregar
document.addEventListener('DOMContentLoaded', renderCategoryList);

showSelectedButton.addEventListener('click', showSelectedCategories);