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
            }]
    },
            { 
                id: 17,
                name: "Polo Aquático",
                selected: false,
                sessions: [
                    {
                        name: "Polo Aquático - WPO01",
                        startTime: new Date("2024-07-30T19:30"),
                        endTime: new Date("2024-07-30T22:30"),
                    },
                    {
                        name: "Polo Aquático - WPO02",
                        startTime: new Date("2024-07-30T15:00"),
                        endTime: new Date("2024-07-30T18:00"),
                    },
                    {
                        name: "Polo Aquático - WPO03",
                        startTime: new Date("2024-07-30T10:30"),
                        endTime: new Date("2024-07-30T13:30"),
                    },
                    {
                        name: "Polo Aquático - WPO04",
                        startTime: new Date("2024-07-29T18:30"),
                        endTime: new Date("2024-07-29T21:30"),
                    },
                    {
                        name: "Polo Aquático - WPO05",
                        startTime: new Date("2024-07-29T14:00"),
                        endTime: new Date("2024-07-29T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO06",
                        startTime: new Date("2024-07-28T19:30"),
                        endTime: new Date("2024-07-28T22:30"),
                    },
                    {
                        name: "Polo Aquático - WPO07",
                        startTime: new Date("2024-07-28T15:00"),
                        endTime: new Date("2024-07-28T18:00"),
                    },
                    {
                        name: "Polo Aquático - WPO08",
                        startTime: new Date("2024-07-28T10:30"),
                        endTime: new Date("2024-07-28T13:30"),
                    },
                    {
                        name: "Polo Aquático - WPO09",
                        startTime: new Date("2024-07-27T18:30"),
                        endTime: new Date("2024-07-27T21:30"),
                    },
                    {
                        name: "Polo Aquático - WPO10",
                        startTime: new Date("2024-07-27T14:00"),
                        endTime: new Date("2024-07-27T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO11",
                        startTime: new Date("2024-08-08T18:00"),
                        endTime: new Date("2024-08-08T21:00"),
                    },
                    {
                        name: "Polo Aquático - WPO12",
                        startTime: new Date("2024-08-08T13:00"),
                        endTime: new Date("2024-08-08T16:00"),
                    },
                    {
                        name: "Polo Aquático - WPO13",
                        startTime: new Date("2024-08-08T18:00"),
                        endTime: new Date("2024-08-08T21:00"),
                    },
                    {
                        name: "Polo Aquático - WPO14",
                        startTime: new Date("2024-08-07T19:00"),
                        endTime: new Date("2024-08-07T22:00"),
                    },
                    {
                        name: "Polo Aquático - WPO15",
                        startTime: new Date("2024-08-07T14:00"),
                        endTime: new Date("2024-08-07T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO16",
                        startTime: new Date("2024-08-06T19:00"),
                        endTime: new Date("2024-08-06T22:00"),
                    },
                    {
                        name: "Polo Aquático - WPO17",
                        startTime: new Date("2024-08-06T14:00"),
                        endTime: new Date("2024-08-06T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO18",
                        startTime: new Date("2024-08-05T18:30"),
                        endTime: new Date("2024-08-05T23:00"),
                    },
                    {
                        name: "Polo Aquático - WPO19",
                        startTime: new Date("2024-08-05T12:00"),
                        endTime: new Date("2024-08-05T16:30"),
                    },
                    {
                        name: "Polo Aquático - WPO20",
                        startTime: new Date("2024-08-04T18:30"),
                        endTime: new Date("2024-08-04T21:30"),
                    },
                    {
                        name: "Polo Aquático - WPO21",
                        startTime: new Date("2024-08-04T14:00"),
                        endTime: new Date("2024-08-04T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO22",
                        startTime: new Date("2024-07-30T15:00"),
                        endTime: new Date("2024-07-30T18:00"),
                    },
                    {
                        name: "Polo Aquático - WPO23",
                        startTime: new Date("2024-07-30T10:30"),
                        endTime: new Date("2024-07-30T13:30"),
                    },
                    {
                        name: "Polo Aquático - WPO24",
                        startTime: new Date("2024-07-29T18:30"),
                        endTime: new Date("2024-07-29T21:30"),
                    },
                    {
                        name: "Polo Aquático - WPO25",
                        startTime: new Date("2024-07-29T14:00"),
                        endTime: new Date("2024-07-29T17:00"),
                    },
                    {
                        name: "Polo Aquático - WPO26",
                        startTime: new Date("2024-08-11T14:00"),
                        endTime: new Date("2024-08-11T15:50"),
                    },
                    {
                        name: "Polo Aquático - WPO27",
                        startTime: new Date("2024-08-11T09:00"),
                        endTime: new Date("2024-08-11T12:00"),
                    },
                    {
                        name: "Polo Aquático - WPO28",
                        startTime: new Date("2024-08-10T14:00"),
                        endTime: new Date("2024-08-10T21:00"),
                    },
                    {
                        name: "Polo Aquático - WPO29",
                        startTime: new Date("2024-08-10T09:00"),
                        endTime: new Date("2024-08-10T12:00"),
                    },
                    {
                        name: "Polo Aquático - WPO30",
                        startTime: new Date("2024-08-09T18:00"),
                        endTime: new Date("2024-08-09T21:00"),
                    },
                    {
                        name: "Polo Aquático - WPO31",
                        startTime: new Date("2024-08-09T13:00"),
                        endTime: new Date("2024-08-09T16:00"),
                    }
                ]
        }, 
        {
                id: 18,
                name: "Halterofilismo",
                selected: false,
                sessions: [
                    {
                        "name": "Halterofilismo - WLF01",
                        "startTime": new Date("2024-08-07T15:00"),
                        "endTime": new Date("2024-08-07T17:30")
                    },
                    {
                        "name": "Halterofilismo - WLF01",
                        "startTime": new Date("2024-08-07T19:30"),
                        "endTime": new Date("2024-08-07T22:00")
                    },
                    {
                        "name": "Halterofilismo - WLF03",
                        "startTime": new Date("2024-08-08T15:00"),
                        "endTime": new Date("2024-08-08T17:30")
                    },
                    {
                        "name": "Halterofilismo - WLF03",
                        "startTime": new Date("2024-08-08T19:30"),
                        "endTime": new Date("2024-08-08T22:00")
                    },
                    {
                        "name": "Halterofilismo - WLF05",
                        "startTime": new Date("2024-08-09T15:00"),
                        "endTime": new Date("2024-08-09T17:30")
                    },
                    {
                        "name": "Halterofilismo - WLF05",
                        "startTime": new Date("2024-08-09T19:30"),
                        "endTime": new Date("2024-08-09T22:00")
                    },
                    {
                        "name": "Halterofilismo - WLF07",
                        "startTime": new Date("2024-08-10T11:30"),
                        "endTime": new Date("2024-08-10T14:00")
                    },
                    {
                        "name": "Halterofilismo - WLF07",
                        "startTime": new Date("2024-08-10T16:00"),
                        "endTime": new Date("2024-08-10T18:30")
                    },
                    {
                        "name": "Halterofilismo - WLF07",
                        "startTime": new Date("2024-08-10T20:30"),
                        "endTime": new Date("2024-08-10T23:00")
                    },
                    {
                        "name": "Halterofilismo - WLF06",
                        "startTime": new Date("2024-08-11T11:30"),
                        "endTime": new Date("2024-08-11T14:00")
                    }
                ]
            }, 
            {
                id: 19,
                name: "Vôlei",
                selected: false,
                sessions: [
                    {
                        "name": "Vôlei - VVO01",
                        "startTime": new Date("2024-07-27T09:00"),
                        "endTime": new Date("2024-07-27T11:30")
                    },
                    {
                        "name": "Vôlei - VVO02",
                        "startTime": new Date("2024-07-27T13:00"),
                        "endTime": new Date("2024-07-27T15:30")
                    },
                    {
                        "name": "Vôlei - VVO03",
                        "startTime": new Date("2024-07-27T17:00"),
                        "endTime": new Date("2024-07-27T19:30")
                    },
                    {
                        "name": "Vôlei - VVO04",
                        "startTime": new Date("2024-07-27T21:00"),
                        "endTime": new Date("2024-07-27T23:30")
                    },
                    {
                        "name": "Vôlei - VVO05",
                        "startTime": new Date("2024-07-28T09:00"),
                        "endTime": new Date("2024-07-28T11:30")
                    },
                    {
                        "name": "Vôlei - VVO06",
                        "startTime": new Date("2024-07-28T13:00"),
                        "endTime": new Date("2024-07-28T15:30")
                    },
                    {
                        "name": "Vôlei - VVO07",
                        "startTime": new Date("2024-07-28T17:00"),
                        "endTime": new Date("2024-07-28T19:30")
                    },
                    {
                        "name": "Vôlei - VVO08",
                        "startTime": new Date("2024-07-28T21:00"),
                        "endTime": new Date("2024-07-28T23:30")
                    },
                    {
                        "name": "Vôlei - VVO09",
                        "startTime": new Date("2024-07-29T09:00"),
                        "endTime": new Date("2024-07-29T11:30")
                    },
                    {
                        "name": "Vôlei - VVO10",
                        "startTime": new Date("2024-07-29T13:00"),
                        "endTime": new Date("2024-07-29T15:30")
                    },
                    {
                        "name": "Vôlei - VVO11",
                        "startTime": new Date("2024-07-29T17:00"),
                        "endTime": new Date("2024-07-29T19:30")
                    },
                    {
                        "name": "Vôlei - VVO12",
                        "startTime": new Date("2024-07-29T21:00"),
                        "endTime": new Date("2024-07-29T23:30")
                    },
                    {
                        "name": "Vôlei - VVO13",
                        "startTime": new Date("2024-07-30T09:00"),
                        "endTime": new Date("2024-07-30T11:30")
                    },
                    {
                        "name": "Vôlei - VVO14",
                        "startTime": new Date("2024-07-30T13:00"),
                        "endTime": new Date("2024-07-30T15:30")
                    },
                    {
                        "name": "Vôlei - VVO15",
                        "startTime": new Date("2024-07-30T17:00"),
                        "endTime": new Date("2024-07-30T19:30")
                    },
                    {
                        "name": "Vôlei - VVO16",
                        "startTime": new Date("2024-07-31T09:00"),
                        "endTime": new Date("2024-07-31T11:30")
                    },
                    {
                        "name": "Vôlei - VVO17",
                        "startTime": new Date("2024-07-31T13:00"),
                        "endTime": new Date("2024-07-31T15:30")
                    },
                    {
                        "name": "Vôlei - VVO18",
                        "startTime": new Date("2024-07-31T17:00"),
                        "endTime": new Date("2024-07-31T19:30")
                    },
                    {
                        "name": "Vôlei - VVO19",
                        "startTime": new Date("2024-07-31T21:00"),
                        "endTime": new Date("2024-07-31T23:30")
                    },
                    {
                        "name": "Vôlei - VVO20",
                        "startTime": new Date("2024-08-01T09:00"),
                        "endTime": new Date("2024-08-01T11:30")
                    },
                    {
                        "name": "Vôlei - VVO21",
                        "startTime": new Date("2024-08-01T13:00"),
                        "endTime": new Date("2024-08-01T15:30")
                    },
                    {
                        "name": "Vôlei - VVO22",
                        "startTime": new Date("2024-08-01T17:00"),
                        "endTime": new Date("2024-08-01T19:30")
                    },
                    {
                        "name": "Vôlei - VVO23",
                        "startTime": new Date("2024-08-01T21:00"),
                        "endTime": new Date("2024-08-01T23:30")
                    },
                    {
                        "name": "Vôlei - VVO24",
                        "startTime": new Date("2024-08-02T09:00"),
                        "endTime": new Date("2024-08-02T11:30")
                    },
                    {
                        "name": "Vôlei - VVO25",
                        "startTime": new Date("2024-08-02T13:00"),
                        "endTime": new Date("2024-08-02T15:30")
                    },
                    {
                        "name": "Vôlei - VVO26",
                        "startTime": new Date("2024-08-02T17:00"),
                        "endTime": new Date("2024-08-02T19:30")
                    },
                    {
                        "name": "Vôlei - VVO27",
                        "startTime": new Date("2024-08-02T21:00"),
                        "endTime": new Date("2024-08-02T23:30")
                    },
                    {
                        "name": "Vôlei - VVO28",
                        "startTime": new Date("2024-08-03T09:00"),
                        "endTime": new Date("2024-08-03T11:30")
                    },
                    {
                        "name": "Vôlei - VVO29",
                        "startTime": new Date("2024-08-03T13:00"),
                        "endTime": new Date("2024-08-03T15:30")
                    },
                    {
                        "name": "Vôlei - VVO30",
                        "startTime": new Date("2024-08-03T17:00"),
                        "endTime": new Date("2024-08-03T19:30")
                    },
                    {
                        "name": "Vôlei - VVO31",
                        "startTime": new Date("2024-08-04T09:00"),
                        "endTime": new Date("2024-08-04T11:30")
                    },
                    {
                        "name": "Vôlei - VVO32",
                        "startTime": new Date("2024-08-04T13:00"),
                        "endTime": new Date("2024-08-04T15:30")
                    },
                    {
                        "name": "Vôlei - VVO33",
                        "startTime": new Date("2024-08-04T17:00"),
                        "endTime": new Date("2024-08-04T19:30")
                    },
                    {
                        "name": "Vôlei - VVO34",
                        "startTime": new Date("2024-08-04T21:00"),
                        "endTime": new Date("2024-08-04T23:30")
                    },
                    {
                        "name": "Vôlei - VVO35",
                        "startTime": new Date("2024-08-05T09:00"),
                        "endTime": new Date("2024-08-05T11:30")
                    },
                    {
                        "name": "Vôlei - VVO36",
                        "startTime": new Date("2024-08-05T13:00"),
                        "endTime": new Date("2024-08-05T15:30")
                    },
                    {
                        "name": "Vôlei - VVO37",
                        "startTime": new Date("2024-08-05T17:00"),
                        "endTime": new Date("2024-08-05T19:30")
                    },
                    {
                        "name": "Vôlei - VVO38",
                        "startTime": new Date("2024-08-05T21:00"),
                        "endTime": new Date("2024-08-05T23:30")
                    },
                    {
                        "name": "Vôlei - VVO39",
                        "startTime": new Date("2024-08-06T09:00"),
                        "endTime": new Date("2024-08-06T11:30")
                    },
                    {
                        "name": "Vôlei - VVO40",
                        "startTime": new Date("2024-08-06T13:00"),
                        "endTime": new Date("2024-08-06T15:30")
                    },
                    {
                        "name": "Vôlei - VVO41",
                        "startTime": new Date("2024-08-06T17:00"),
                        "endTime": new Date("2024-08-06T19:30")
                    },
                    {
                        "name": "Vôlei - VVO42",
                        "startTime": new Date("2024-08-06T21:00"),
                        "endTime": new Date("2024-08-06T23:30")
                    },
                    {
                        "name": "Vôlei - VVO43",
                        "startTime": new Date("2024-08-07T16:00"),
                        "endTime": new Date("2024-08-07T18:30")
                    },
                    {
                        "name": "Vôlei - VVO44",
                        "startTime": new Date("2024-08-07T20:00"),
                        "endTime": new Date("2024-08-07T22:30")
                    },
                    {
                        "name": "Vôlei - VVO45",
                        "startTime": new Date("2024-08-08T16:00"),
                        "endTime": new Date("2024-08-08T18:30")
                    },
                    {
                        "name": "Vôlei - VVO46",
                        "startTime": new Date("2024-08-08T20:00"),
                        "endTime": new Date("2024-08-08T22:30")
                    },
                    {
                        "name": "Vôlei - VVO47",
                        "startTime": new Date("2024-08-09T16:00"),
                        "endTime": new Date("2024-08-09T18:30")
                    },
                    {
                        "name": "Vôlei - VVO48",
                        "startTime": new Date("2024-08-09T20:00"),
                        "endTime": new Date("2024-08-09T22:30")
                    }
                ]
            }, 
            {
                id: 20,
                name: "Vôlei de Praia",
                selected: false,
                sessions:[
                    {
                        "name": "Vôlei de Praia - VBV01",
                        "startTime": new Date("2024-07-27T09:00"),
                        "endTime": new Date("2024-07-27T11:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV02",
                        "startTime": new Date("2024-07-27T13:00"),
                        "endTime": new Date("2024-07-27T15:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV03",
                        "startTime": new Date("2024-07-27T17:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV04",
                        "startTime": new Date("2024-07-27T21:00"),
                        "endTime": new Date("2024-07-27T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV05",
                        "startTime": new Date("2024-07-28T09:00"),
                        "endTime": new Date("2024-07-28T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV06",
                        "startTime": new Date("2024-07-28T15:00"),
                        "endTime": new Date("2024-07-28T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV07",
                        "startTime": new Date("2024-07-28T20:00"),
                        "endTime": new Date("2024-07-28T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV08",
                        "startTime": new Date("2024-07-29T09:00"),
                        "endTime": new Date("2024-07-29T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV09",
                        "startTime": new Date("2024-07-29T15:00"),
                        "endTime": new Date("2024-07-29T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV10",
                        "startTime": new Date("2024-07-29T20:00"),
                        "endTime": new Date("2024-07-29T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV11",
                        "startTime": new Date("2024-07-30T09:00"),
                        "endTime": new Date("2024-07-30T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV12",
                        "startTime": new Date("2024-07-30T15:00"),
                        "endTime": new Date("2024-07-30T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV13",
                        "startTime": new Date("2024-07-30T20:00"),
                        "endTime": new Date("2024-07-30T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV14",
                        "startTime": new Date("2024-07-31T09:00"),
                        "endTime": new Date("2024-07-31T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV15",
                        "startTime": new Date("2024-07-31T15:00"),
                        "endTime": new Date("2024-07-31T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV16",
                        "startTime": new Date("2024-07-31T20:00"),
                        "endTime": new Date("2024-07-31T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV17",
                        "startTime": new Date("2024-08-01T09:00"),
                        "endTime": new Date("2024-08-01T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV18",
                        "startTime": new Date("2024-08-01T15:00"),
                        "endTime": new Date("2024-08-01T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV19",
                        "startTime": new Date("2024-08-01T20:00"),
                        "endTime": new Date("2024-08-01T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV20",
                        "startTime": new Date("2024-08-02T09:00"),
                        "endTime": new Date("2024-08-02T13:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV21",
                        "startTime": new Date("2024-08-02T15:00"),
                        "endTime": new Date("2024-08-02T18:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV22",
                        "startTime": new Date("2024-08-02T20:00"),
                        "endTime": new Date("2024-08-02T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV23",
                        "startTime": new Date("2024-08-03T09:00"),
                        "endTime": new Date("2024-08-03T11:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV24",
                        "startTime": new Date("2024-08-03T13:00"),
                        "endTime": new Date("2024-08-03T15:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV25",
                        "startTime": new Date("2024-08-03T17:00"),
                        "endTime": new Date("2024-08-03T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV26",
                        "startTime": new Date("2024-08-03T21:00"),
                        "endTime": new Date("2024-08-03T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV27",
                        "startTime": new Date("2024-08-04T09:00"),
                        "endTime": new Date("2024-08-04T11:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV28",
                        "startTime": new Date("2024-08-04T13:00"),
                        "endTime": new Date("2024-08-04T15:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV29",
                        "startTime": new Date("2024-08-04T17:00"),
                        "endTime": new Date("2024-08-04T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV30",
                        "startTime": new Date("2024-08-04T21:00"),
                        "endTime": new Date("2024-08-04T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV31",
                        "startTime": new Date("2024-08-05T09:00"),
                        "endTime": new Date("2024-08-05T11:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV32",
                        "startTime": new Date("2024-08-05T13:00"),
                        "endTime": new Date("2024-08-05T15:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV33",
                        "startTime": new Date("2024-08-05T17:00"),
                        "endTime": new Date("2024-08-05T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV34",
                        "startTime": new Date("2024-08-05T21:00"),
                        "endTime": new Date("2024-08-05T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV35",
                        "startTime": new Date("2024-08-06T17:00"),
                        "endTime": new Date("2024-08-06T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV36",
                        "startTime": new Date("2024-08-06T21:00"),
                        "endTime": new Date("2024-08-06T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV37",
                        "startTime": new Date("2024-08-06T20:00"),
                        "endTime": new Date("2024-08-06T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV38",
                        "startTime": new Date("2024-08-07T17:00"),
                        "endTime": new Date("2024-08-07T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV39",
                        "startTime": new Date("2024-08-07T21:00"),
                        "endTime": new Date("2024-08-07T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV40",
                        "startTime": new Date("2024-08-08T17:00"),
                        "endTime": new Date("2024-08-08T19:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV41",
                        "startTime": new Date("2024-08-08T21:00"),
                        "endTime": new Date("2024-08-08T23:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV42",
                        "startTime": new Date("2024-08-09T21:00"),
                        "endTime": new Date("2024-08-10T00:00")
                    },
                    {
                        "name": "Vôlei de Praia - VBV43",
                        "startTime": new Date("2024-08-10T21:00"),
                        "endTime": new Date("2024-08-11T00:00")
                    }
                ]
            }, 
            {
                id: 21,
                name: "Tênis de Mesa",
                selected: false,
                sessions:[
                    {
                        "name": "Tênis de Mesa - TTE01",
                        "startTime": new Date("2024-07-27T15:00"),
                        "endTime": new Date("2024-07-27T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE02",
                        "startTime": new Date("2024-07-27T20:00"),
                        "endTime": new Date("2024-07-27T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE03",
                        "startTime": new Date("2024-07-28T10:00"),
                        "endTime": new Date("2024-07-28T14:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE04",
                        "startTime": new Date("2024-07-28T16:00"),
                        "endTime": new Date("2024-07-28T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE05",
                        "startTime": new Date("2024-07-28T20:00"),
                        "endTime": new Date("2024-07-28T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE06",
                        "startTime": new Date("2024-07-29T10:00"),
                        "endTime": new Date("2024-07-29T14:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE07",
                        "startTime": new Date("2024-07-29T16:00"),
                        "endTime": new Date("2024-07-29T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE08",
                        "startTime": new Date("2024-07-29T20:00"),
                        "endTime": new Date("2024-07-29T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE09",
                        "startTime": new Date("2024-07-30T10:00"),
                        "endTime": new Date("2024-07-30T12:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE10",
                        "startTime": new Date("2024-07-30T13:30"),
                        "endTime": new Date("2024-07-30T16:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE11",
                        "startTime": new Date("2024-07-30T13:30"),
                        "endTime": new Date("2024-07-30T16:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE12",
                        "startTime": new Date("2024-07-31T10:00"),
                        "endTime": new Date("2024-07-31T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE13",
                        "startTime": new Date("2024-07-31T15:00"),
                        "endTime": new Date("2024-07-31T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE14",
                        "startTime": new Date("2024-07-31T20:00"),
                        "endTime": new Date("2024-07-31T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE15",
                        "startTime": new Date("2024-08-01T10:00"),
                        "endTime": new Date("2024-08-01T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE16",
                        "startTime": new Date("2024-08-01T10:00"),
                        "endTime": new Date("2024-08-01T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE17",
                        "startTime": new Date("2024-08-01T15:00"),
                        "endTime": new Date("2024-08-01T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE18",
                        "startTime": new Date("2024-08-01T15:00"),
                        "endTime": new Date("2024-08-01T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE19",
                        "startTime": new Date("2024-08-02T10:00"),
                        "endTime": new Date("2024-08-02T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE20",
                        "startTime": new Date("2024-08-02T10:00"),
                        "endTime": new Date("2024-08-02T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE21",
                        "startTime": new Date("2024-08-02T15:00"),
                        "endTime": new Date("2024-08-02T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE22",
                        "startTime": new Date("2024-08-02T15:00"),
                        "endTime": new Date("2024-08-02T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE23",
                        "startTime": new Date("2024-08-03T13:30"),
                        "endTime": new Date("2024-08-03T16:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE24",
                        "startTime": new Date("2024-08-04T13:30"),
                        "endTime": new Date("2024-08-04T16:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE25",
                        "startTime": new Date("2024-08-04T13:30"),
                        "endTime": new Date("2024-08-04T16:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE26",
                        "startTime": new Date("2024-08-05T10:00"),
                        "endTime": new Date("2024-08-05T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE27",
                        "startTime": new Date("2024-08-05T15:00"),
                        "endTime": new Date("2024-08-05T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE28",
                        "startTime": new Date("2024-08-05T20:00"),
                        "endTime": new Date("2024-08-05T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE29",
                        "startTime": new Date("2024-08-06T10:00"),
                        "endTime": new Date("2024-08-06T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE30",
                        "startTime": new Date("2024-08-06T15:00"),
                        "endTime": new Date("2024-08-06T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE31",
                        "startTime": new Date("2024-08-06T20:00"),
                        "endTime": new Date("2024-08-06T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE32",
                        "startTime": new Date("2024-08-07T10:00"),
                        "endTime": new Date("2024-08-07T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE33",
                        "startTime": new Date("2024-08-07T15:00"),
                        "endTime": new Date("2024-08-07T18:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE34",
                        "startTime": new Date("2024-08-07T20:00"),
                        "endTime": new Date("2024-08-07T23:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE35",
                        "startTime": new Date("2024-08-08T10:00"),
                        "endTime": new Date("2024-08-08T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE36",
                        "startTime": new Date("2024-08-08T15:00"),
                        "endTime": new Date("2024-08-08T18:30")
                    },
                    {
                        "name": "Tênis de Mesa - TTE37",
                        "startTime": new Date("2024-08-08T15:00"),
                        "endTime": new Date("2024-08-08T18:30")
                    },
                    {
                        "name": "Tênis de Mesa - TTE38",
                        "startTime": new Date("2024-08-09T10:00"),
                        "endTime": new Date("2024-08-09T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE39",
                        "startTime": new Date("2024-08-09T15:00"),
                        "endTime": new Date("2024-08-09T18:30")
                    },
                    {
                        "name": "Tênis de Mesa - TTE40",
                        "startTime": new Date("2024-08-09T15:00"),
                        "endTime": new Date("2024-08-09T18:30")
                    },
                    {
                        "name": "Tênis de Mesa - TTE41",
                        "startTime": new Date("2024-08-09T15:00"),
                        "endTime": new Date("2024-08-09T18:30")
                    },
                    {
                        "name": "Tênis de Mesa - TTE42",
                        "startTime": new Date("2024-08-10T10:00"),
                        "endTime": new Date("2024-08-10T13:00")
                    },
                    {
                        "name": "Tênis de Mesa - TTE43",
                        "startTime": new Date("2024-08-10T15:00"),
                        "endTime": new Date("2024-08-10T18:30")
                    }
                ]
            }, 
            {
                id: 22,
                name: "Triatlo",
                selected: false,
                sessions:[
                    {
                        "name": "Triatlo - TRI01",
                        "startTime": new Date("2024-07-30T08:00"),
                        "endTime": new Date("2024-07-30T10:30")
                    },
                    {
                        "name": "Triatlo - TRI02",
                        "startTime": new Date("2024-07-31T08:00"),
                        "endTime": new Date("2024-07-31T10:40")
                    },
                    {
                        "name": "Triatlo - TRI03",
                        "startTime": new Date("2024-08-05T08:00"),
                        "endTime": new Date("2024-08-05T10:10")
                    }
                ]
            }, 
            {
                id: 23,
                name: "Taekwondo",
                selected: false,
                sessions:[
                    {
                        "name": "Taekwondo - TKW01",
                        "startTime": new Date("2024-08-07T09:00"),
                        "endTime": new Date("2024-08-07T12:30")
                    },
                    {
                        "name": "Taekwondo - TKW02",
                        "startTime": new Date("2024-08-07T14:30"),
                        "endTime": new Date("2024-08-07T17:30")
                    },
                    {
                        "name": "Taekwondo - TKW03",
                        "startTime": new Date("2024-08-07T19:30"),
                        "endTime": new Date("2024-08-07T23:00")
                    },
                    {
                        "name": "Taekwondo - TKW04",
                        "startTime": new Date("2024-08-08T09:00"),
                        "endTime": new Date("2024-08-08T12:30")
                    },
                    {
                        "name": "Taekwondo - TKW05",
                        "startTime": new Date("2024-08-08T14:30"),
                        "endTime": new Date("2024-08-08T17:30")
                    },
                    {
                        "name": "Taekwondo - TKW06",
                        "startTime": new Date("2024-08-08T19:30"),
                        "endTime": new Date("2024-08-08T23:00")
                    },
                    {
                        "name": "Taekwondo - TKW07",
                        "startTime": new Date("2024-08-09T09:00"),
                        "endTime": new Date("2024-08-09T12:30")
                    },
                    {
                        "name": "Taekwondo - TKW08",
                        "startTime": new Date("2024-08-09T14:30"),
                        "endTime": new Date("2024-08-09T17:30")
                    },
                    {
                        "name": "Taekwondo - TKW09",
                        "startTime": new Date("2024-08-09T19:30"),
                        "endTime": new Date("2024-08-09T23:00")
                    },
                    {
                        "name": "Taekwondo - TKW10",
                        "startTime": new Date("2024-08-10T09:00"),
                        "endTime": new Date("2024-08-10T12:30")
                    },
                    {
                        "name": "Taekwondo - TKW11",
                        "startTime": new Date("2024-08-10T14:30"),
                        "endTime": new Date("2024-08-10T17:30")
                    },
                    {
                        "name": "Taekwondo - TKW12",
                        "startTime": new Date("2024-08-10T19:30"),
                        "endTime": new Date("2024-08-10T23:00")
                    }
                ]
            }, 
            {
                id: 24,
                name: "Tênis",
                selected: false,
                sessions:[
                    {
                        "name": "Tênis - TEN01",
                        "startTime": new Date("2024-07-27T12:00"),
                        "endTime": new Date("2024-07-27T17:00")
                    },
                    {
                        "name": "Tênis - TEN02",
                        "startTime": new Date("2024-07-27T12:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Tênis - TEN03",
                        "startTime": new Date("2024-07-27T12:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Tênis - TEN04",
                        "startTime": new Date("2024-07-27T12:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Tênis - TEN05",
                        "startTime": new Date("2024-07-27T19:00"),
                        "endTime": new Date("2024-07-27T23:00")
                    },
                    {
                        "name": "Tênis - TEN06",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T17:00")
                    },
                    {
                        "name": "Tênis - TEN07",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Tênis - TEN08",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Tênis - TEN09",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Tênis - TEN10",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Tênis - TEN11",
                        "startTime": new Date("2024-07-29T19:00"),
                        "endTime": new Date("2024-07-29T23:00")
                    },
                    {
                        "name": "Tênis - TEN12",
                        "startTime": new Date("2024-07-29T12:00"),
                        "endTime": new Date("2024-07-29T17:00")
                    },
                    {
                        "name": "Tênis - TEN13",
                        "startTime": new Date("2024-07-29T12:00"),
                        "endTime": new Date("2024-07-29T19:00")
                    },
                    {
                        "name": "Tênis - TEN14",
                        "startTime": new Date("2024-07-29T12:00"),
                        "endTime": new Date("2024-07-29T19:00")
                    },
                    {
                        "name": "Tênis - TEN15",
                        "startTime": new Date("2024-07-29T19:00"),
                        "endTime": new Date("2024-07-29T23:00")
                    },
                    {
                        "name": "Tênis - TEN16",
                        "startTime": new Date("2024-07-30T12:00"),
                        "endTime": new Date("2024-07-30T17:00")
                    },
                    {
                        "name": "Tênis - TEN17",
                        "startTime": new Date("2024-07-30T12:00"),
                        "endTime": new Date("2024-07-30T19:00")
                    },
                    {
                        "name": "Tênis - TEN18",
                        "startTime": new Date("2024-07-30T12:00"),
                        "endTime": new Date("2024-07-30T19:00")
                    },
                    {
                        "name": "Tênis - TEN19",
                        "startTime": new Date("2024-07-30T19:00"),
                        "endTime": new Date("2024-07-30T23:00")
                    },
                    {
                        "name": "Tênis - TEN20",
                        "startTime": new Date("2024-07-30T12:00"),
                        "endTime": new Date("2024-07-30T17:00")
                    },
                    {
                        "name": "Tênis - TEN21",
                        "startTime": new Date("2024-07-31T12:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Tênis - TEN22",
                        "startTime": new Date("2024-07-31T12:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Tênis - TEN23",
                        "startTime": new Date("2024-07-31T12:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Tênis - TEN24",
                        "startTime": new Date("2024-07-31T12:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Tênis - TEN25",
                        "startTime": new Date("2024-07-31T12:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Tênis - TEN26",
                        "startTime": new Date("2024-08-01T12:00"),
                        "endTime": new Date("2024-08-01T19:00")
                    },
                    {
                        "name": "Tênis - TEN27",
                        "startTime": new Date("2024-08-01T19:00"),
                        "endTime": new Date("2024-08-01T23:00")
                    },
                    {
                        "name": "Tênis - TEN28",
                        "startTime": new Date("2024-08-01T12:00"),
                        "endTime": new Date("2024-08-01T17:00")
                    },
                    {
                        "name": "Tênis - TEN29",
                        "startTime": new Date("2024-08-01T12:00"),
                        "endTime": new Date("2024-08-01T19:00")
                    },
                    {
                        "name": "Tênis - TEN30",
                        "startTime": new Date("2024-08-02T12:00"),
                        "endTime": new Date("2024-08-02T19:00")
                    },
                    {
                        "name": "Tênis - TEN31",
                        "startTime": new Date("2024-08-02T12:00"),
                        "endTime": new Date("2024-08-02T19:00")
                    },
                    {
                        "name": "Tênis - TEN32",
                        "startTime": new Date("2024-08-02T12:00"),
                        "endTime": new Date("2024-08-02T19:00")
                    },
                    {
                        "name": "Tênis - TEN33",
                        "startTime": new Date("2024-08-03T12:00"),
                        "endTime": new Date("2024-08-03T19:00")
                    },
                    {
                        "name": "Tênis - TEN34",
                        "startTime": new Date("2024-08-04T12:00"),
                        "endTime": new Date("2024-08-04T19:00")
                    }
                ]
            }, 
            {
                id: 25,
                name: "Natação",
                selected: false,
                sessions:[
                    {
                        "name": "Natação - SWM01",
                        "startTime": new Date("2024-07-27T11:00"),
                        "endTime": new Date("2024-07-27T13:00")
                    },
                    {
                        "name": "Natação - SWM02",
                        "startTime": new Date("2024-07-27T20:30"),
                        "endTime": new Date("2024-07-27T22:30")
                    },
                    {
                        "name": "Natação - SWM03",
                        "startTime": new Date("2024-07-28T11:00"),
                        "endTime": new Date("2024-07-28T13:00")
                    },
                    {
                        "name": "Natação - SWM04",
                        "startTime": new Date("2024-07-28T20:30"),
                        "endTime": new Date("2024-07-28T22:30")
                    },
                    {
                        "name": "Natação - SWM05",
                        "startTime": new Date("2024-07-29T11:00"),
                        "endTime": new Date("2024-07-29T13:00")
                    },
                    {
                        "name": "Natação - SWM06",
                        "startTime": new Date("2024-07-29T20:30"),
                        "endTime": new Date("2024-07-29T22:30")
                    },
                    {
                        "name": "Natação - SWM07",
                        "startTime": new Date("2024-07-30T11:00"),
                        "endTime": new Date("2024-07-30T13:00")
                    },
                    {
                        "name": "Natação - SWM08",
                        "startTime": new Date("2024-07-30T20:30"),
                        "endTime": new Date("2024-07-30T22:30")
                    },
                    {
                        "name": "Natação - SWM09",
                        "startTime": new Date("2024-07-31T11:00"),
                        "endTime": new Date("2024-07-31T13:00")
                    },
                    {
                        "name": "Natação - SWM10",
                        "startTime": new Date("2024-07-31T20:30"),
                        "endTime": new Date("2024-07-31T22:30")
                    },
                    {
                        "name": "Natação - SWM11",
                        "startTime": new Date("2024-08-01T11:00"),
                        "endTime": new Date("2024-08-01T13:00")
                    },
                    {
                        "name": "Natação - SWM12",
                        "startTime": new Date("2024-08-01T20:30"),
                        "endTime": new Date("2024-08-01T22:30")
                    },
                    {
                        "name": "Natação - SWM13",
                        "startTime": new Date("2024-08-02T11:00"),
                        "endTime": new Date("2024-08-02T13:00")
                    },
                    {
                        "name": "Natação - SWM14",
                        "startTime": new Date("2024-08-02T20:30"),
                        "endTime": new Date("2024-08-02T22:30")
                    },
                    {
                        "name": "Natação - SWM15",
                        "startTime": new Date("2024-08-03T11:00"),
                        "endTime": new Date("2024-08-03T13:00")
                    },
                    {
                        "name": "Natação - SWM16",
                        "startTime": new Date("2024-08-03T20:30"),
                        "endTime": new Date("2024-08-03T22:30")
                    },
                    {
                        "name": "Natação - SWM17",
                        "startTime": new Date("2024-08-04T18:30"),
                        "endTime": new Date("2024-08-04T20:30")
                    }
                ]
            }, 
            {
                id: 26,
                name: "Nado Artístico",
                selected: false,
                sessions:[
                    {
                        "name": "Nado artístico - SWA01",
                        "startTime": new Date("2024-08-05T19:30"),
                        "endTime": new Date("2024-08-05T21:00")
                    },
                    {
                        "name": "Nado artístico - SWA02",
                        "startTime": new Date("2024-08-06T19:30"),
                        "endTime": new Date("2024-08-06T21:00")
                    },
                    {
                        "name": "Nado artístico - SWA03",
                        "startTime": new Date("2024-08-07T19:30"),
                        "endTime": new Date("2024-08-07T21:15")
                    },
                    {
                        "name": "Nado artístico - SWA04",
                        "startTime": new Date("2024-08-09T19:30"),
                        "endTime": new Date("2024-08-09T21:30")
                    },
                    {
                        "name": "Nado artístico - SWA05",
                        "startTime": new Date("2024-08-10T19:30"),
                        "endTime": new Date("2024-08-10T22:00")
                    }
                ]
            }, 
            {
                id: 27,
                name: "Surf",
                selected: false,
                sessions:[
                    {
                        "name": "Surf - SRF01",
                        "startTime": new Date("2024-07-27T07:00"),
                        "endTime": new Date("2024-07-27T16:30")
                    },
                    {
                        "name": "Surf - SRF02",
                        "startTime": new Date("2024-07-28T07:00"),
                        "endTime": new Date("2024-07-28T16:30")
                    },
                    {
                        "name": "Surf - SRF03",
                        "startTime": new Date("2024-07-29T07:00"),
                        "endTime": new Date("2024-07-29T16:30")
                    },
                    {
                        "name": "Surf - SRF04",
                        "startTime": new Date("2024-07-30T07:00"),
                        "endTime": new Date("2024-07-30T16:50")
                    }
                ]
            }, 
            {
                id: 28,
                name: "Skate",
                selected: false,
                sessions:[
                    {
                        "name": "Skate - SKB01",
                        "startTime": new Date("2024-07-27T12:00"),
                        "endTime": new Date("2024-07-27T15:30")
                    },
                    {
                        "name": "Skate - SKB02",
                        "startTime": new Date("2024-07-27T17:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Skate - SKB03",
                        "startTime": new Date("2024-07-28T12:00"),
                        "endTime": new Date("2024-07-28T15:30")
                    },
                    {
                        "name": "Skate - SKB04",
                        "startTime": new Date("2024-07-28T17:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Skate - SKB05",
                        "startTime": new Date("2024-08-06T12:30"),
                        "endTime": new Date("2024-08-06T16:00")
                    },
                    {
                        "name": "Skate - SKB06",
                        "startTime": new Date("2024-08-06T17:30"),
                        "endTime": new Date("2024-08-06T19:00")
                    },
                    {
                        "name": "Skate - SKB07",
                        "startTime": new Date("2024-08-07T12:30"),
                        "endTime": new Date("2024-08-07T16:00")
                    },
                    {
                        "name": "Skate - SKB08",
                        "startTime": new Date("2024-08-07T17:30"),
                        "endTime": new Date("2024-08-07T19:00")
                    }
                ]
            }, 
            {
                id: 29,
                name: "Shooting",
                selected: false,
                sessions:[
                    {
                        "name": "Shooting - SHO01",
                        "startTime": new Date("2024-07-27T09:00"),
                        "endTime": new Date("2024-07-27T13:45")
                    },
                    {
                        "name": "Shooting - SHO02",
                        "startTime": new Date("2024-07-27T10:30"),
                        "endTime": new Date("2024-07-27T11:50")
                    },
                    {
                        "name": "Shooting - SHO03",
                        "startTime": new Date("2024-07-28T09:15"),
                        "endTime": new Date("2024-07-28T12:30")
                    },
                    {
                        "name": "Shooting - SHO04",
                        "startTime": new Date("2024-07-28T09:30"),
                        "endTime": new Date("2024-07-28T13:05")
                    },
                    {
                        "name": "Shooting - SHO05",
                        "startTime": new Date("2024-07-29T09:15"),
                        "endTime": new Date("2024-07-29T13:05")
                    },
                    {
                        "name": "Shooting - SHO06",
                        "startTime": new Date("2024-07-29T09:00"),
                        "endTime": new Date("2024-07-29T17:05")
                    },
                    {
                        "name": "Shooting - SHO07",
                        "startTime": new Date("2024-07-30T09:30"),
                        "endTime": new Date("2024-07-30T10:50")
                    },
                    {
                        "name": "Shooting - SHO08",
                        "startTime": new Date("2024-07-30T09:30"),
                        "endTime": new Date("2024-07-30T10:50")
                    },
                    {
                        "name": "Shooting - SHO09",
                        "startTime": new Date("2024-07-31T09:00"),
                        "endTime": new Date("2024-07-31T10:30")
                    },
                    {
                        "name": "Shooting - SHO10",
                        "startTime": new Date("2024-07-31T09:00"),
                        "endTime": new Date("2024-07-31T17:05")
                    },
                    {
                        "name": "Shooting - SHO11",
                        "startTime": new Date("2024-08-01T09:30"),
                        "endTime": new Date("2024-08-01T10:50")
                    },
                    {
                        "name": "Shooting - SHO12",
                        "startTime": new Date("2024-08-01T12:00"),
                        "endTime": new Date("2024-08-01T13:30")
                    },
                    {
                        "name": "Shooting - SHO13",
                        "startTime": new Date("2024-08-02T09:00"),
                        "endTime": new Date("2024-08-02T14:30")
                    },
                    {
                        "name": "Shooting - SHO14",
                        "startTime": new Date("2024-08-02T09:00"),
                        "endTime": new Date("2024-08-02T14:00")
                    },
                    {
                        "name": "Shooting - SHO15",
                        "startTime": new Date("2024-08-02T09:30"),
                        "endTime": new Date("2024-08-02T10:50")
                    },
                    {
                        "name": "Shooting - SHO16",
                        "startTime": new Date("2024-08-03T09:00"),
                        "endTime": new Date("2024-08-03T17:05")
                    },
                    {
                        "name": "Shooting - SHO17",
                        "startTime": new Date("2024-08-03T09:30"),
                        "endTime": new Date("2024-08-03T10:50")
                    },
                    {
                        "name": "Shooting - SHO18",
                        "startTime": new Date("2024-08-04T09:00"),
                        "endTime": new Date("2024-08-04T17:00")
                    },
                    {
                        "name": "Shooting - SHO19",
                        "startTime": new Date("2024-08-04T09:30"),
                        "endTime": new Date("2024-08-04T17:05")
                    },
                    {
                        "name": "Shooting - SHO20",
                        "startTime": new Date("2024-08-05T09:00"),
                        "endTime": new Date("2024-08-05T16:35")
                    },
                    {
                        "name": "Shooting - SHO21",
                        "startTime": new Date("2024-08-05T09:30"),
                        "endTime": new Date("2024-08-05T10:50")
                    }
                ]
            }, 
            {
                id: 30,
                name: "Vela",
                selected: false,
                sessions:[
                    {
                        "name": "Vela - SAL01",
                        "startTime": new Date("2024-07-28T11:00"),
                        "endTime": new Date("2024-07-28T19:00")
                    },
                    {
                        "name": "Vela - SAL02",
                        "startTime": new Date("2024-07-29T11:00"),
                        "endTime": new Date("2024-07-29T19:00")
                    },
                    {
                        "name": "Vela - SAL03",
                        "startTime": new Date("2024-07-30T11:00"),
                        "endTime": new Date("2024-07-30T19:00")
                    },
                    {
                        "name": "Vela - SAL04",
                        "startTime": new Date("2024-07-31T11:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Vela - SAL05",
                        "startTime": new Date("2024-08-01T11:00"),
                        "endTime": new Date("2024-08-01T19:00")
                    },
                    {
                        "name": "Vela - SAL06",
                        "startTime": new Date("2024-08-02T11:00"),
                        "endTime": new Date("2024-08-02T19:00")
                    },
                    {
                        "name": "Vela - SAL07",
                        "startTime": new Date("2024-08-03T11:00"),
                        "endTime": new Date("2024-08-03T19:00")
                    },
                    {
                        "name": "Vela - SAL08",
                        "startTime": new Date("2024-08-04T11:00"),
                        "endTime": new Date("2024-08-04T19:00")
                    },
                    {
                        "name": "Vela - SAL09",
                        "startTime": new Date("2024-08-05T11:00"),
                        "endTime": new Date("2024-08-05T19:00")
                    },
                    {
                        "name": "Vela - SAL10",
                        "startTime": new Date("2024-08-06T11:00"),
                        "endTime": new Date("2024-08-06T19:00")
                    },
                    {
                        "name": "Vela - SAL11",
                        "startTime": new Date("2024-08-07T11:00"),
                        "endTime": new Date("2024-08-07T19:00")
                    },
                    {
                        "name": "Vela - SAL12",
                        "startTime": new Date("2024-08-08T11:00"),
                        "endTime": new Date("2024-08-08T19:00")
                    }
                ]
            }, 
            {
                id: 31,
                name: "Rugby",
                selected: false,
                sessions:[
                    {
                        "name": "Rugby - RUG01",
                        "startTime": new Date("2024-07-24T14:00"),
                        "endTime": new Date("2024-07-24T17:00")
                    },
                    {
                        "name": "Rugby - RUG02",
                        "startTime": new Date("2024-07-25T14:00"),
                        "endTime": new Date("2024-07-25T17:00")
                    },
                    {
                        "name": "Rugby - RUG03",
                        "startTime": new Date("2024-07-25T14:30"),
                        "endTime": new Date("2024-07-25T20:45")
                    },
                    {
                        "name": "Rugby - RUG04",
                        "startTime": new Date("2024-07-27T14:00"),
                        "endTime": new Date("2024-07-27T17:00")
                    },
                    {
                        "name": "Rugby - RUG05",
                        "startTime": new Date("2024-07-28T20:00"),
                        "endTime": new Date("2024-07-28T23:00")
                    },
                    {
                        "name": "Rugby - RUG06",
                        "startTime": new Date("2024-07-29T20:00"),
                        "endTime": new Date("2024-07-29T23:00")
                    },
                    {
                        "name": "Rugby - RUG07",
                        "startTime": new Date("2024-07-29T15:30"),
                        "endTime": new Date("2024-07-29T22:00")
                    },
                    {
                        "name": "Rugby - RUG08",
                        "startTime": new Date("2024-07-30T15:30"),
                        "endTime": new Date("2024-07-30T22:00")
                    }
                ]
            }, 
            {
                id: 32,
                name: "Remo",
                selected: false,
                sessions:[
                    {
                        "name": "Remo - ROW01",
                        "startTime": new Date("2024-07-28T09:00"),
                        "endTime": new Date("2024-07-28T13:10")
                    },
                    {
                        "name": "Remo - ROW02",
                        "startTime": new Date("2024-07-29T09:00"),
                        "endTime": new Date("2024-07-29T13:10")
                    },
                    {
                        "name": "Remo - ROW03",
                        "startTime": new Date("2024-07-30T09:30"),
                        "endTime": new Date("2024-07-30T12:20")
                    },
                    {
                        "name": "Remo - ROW04",
                        "startTime": new Date("2024-07-31T09:30"),
                        "endTime": new Date("2024-07-31T11:50")
                    },
                    {
                        "name": "Remo - ROW05",
                        "startTime": new Date("2024-08-01T09:30"),
                        "endTime": new Date("2024-08-01T11:50")
                    },
                    {
                        "name": "Remo - ROW06",
                        "startTime": new Date("2024-08-01T09:30"),
                        "endTime": new Date("2024-08-01T12:40")
                    },
                    {
                        "name": "Remo - ROW07",
                        "startTime": new Date("2024-08-02T09:30"),
                        "endTime": new Date("2024-08-02T12:50")
                    },
                    {
                        "name": "Remo - ROW08",
                        "startTime": new Date("2024-08-03T09:30"),
                        "endTime": new Date("2024-08-03T11:40")
                    }
                ]
            }, 
            {
                id: 33,
                name: "Maratona Aquática",
                selected: false,
                sessions:[
                    {
                        "name": "Marathon Swimming - OWS01",
                        "startTime": new Date("2024-08-13T07:30"),
                        "endTime": new Date("2024-08-13T10:30")
                    },
                    {
                        "name": "Marathon Swimming - OWS02",
                        "startTime": new Date("2024-08-14T07:30"),
                        "endTime": new Date("2024-08-14T10:30")
                    }
                ]
            }, 
            {
                id: 34,
                name: "Mountain Bike",
                selected: false,
                sessions:[
                    {
                        "name": "Mountain Bike - MTB01",
                        "startTime": new Date("2024-07-28T14:00"),
                        "endTime": new Date("2024-07-28T16:30")
                    },
                    {
                        "name": "Mountain Bike - MTB01",
                        "startTime": new Date("2024-07-29T14:00"),
                        "endTime": new Date("2024-07-29T16:30")
                    }
                ]
            }, 
            {
                id: 35,
                name: "Pentatlo Moderno",
                selected: false,
                sessions:[
                    {
                        "name": "Pentatlo Moderno - MPN01",
                        "startTime": new Date("2024-08-08T11:00"),
                        "endTime": new Date("2024-08-08T17:30")
                    },
                    {
                        "name": "Pentatlo Moderno - MPN02",
                        "startTime": new Date("2024-08-09T13:00"),
                        "endTime": new Date("2024-08-09T19:00")
                    },
                    {
                        "name": "Pentatlo Moderno - MPN03",
                        "startTime": new Date("2024-08-10T09:30"),
                        "endTime": new Date("2024-08-10T15:30")
                    },
                    {
                        "name": "Pentatlo Moderno - MPN04",
                        "startTime": new Date("2024-08-10T17:00"),
                        "endTime": new Date("2024-08-10T19:30")
                    },
                    {
                        "name": "Pentatlo Moderno - MPN05",
                        "startTime": new Date("2024-08-11T11:00"),
                        "endTime": new Date("2024-08-11T13:30")
                    }
                ]
            }, 
            {
                id: 36,
                name: "Judo",
                selected: false,
                sessions:[
                    {
                        "name": "Judo - JUD01",
                        "startTime": new Date("2024-07-27T10:00"),
                        "endTime": new Date("2024-07-27T14:00")
                    },
                    {
                        "name": "Judo - JUD02",
                        "startTime": new Date("2024-07-27T16:00"),
                        "endTime": new Date("2024-07-27T19:00")
                    },
                    {
                        "name": "Judo - JUD03",
                        "startTime": new Date("2024-07-26T10:00"),
                        "endTime": new Date("2024-07-26T14:00")
                    },
                    {
                        "name": "Judo - JUD04",
                        "startTime": new Date("2024-07-26T16:00"),
                        "endTime": new Date("2024-07-26T19:00")
                    },
                    {
                        "name": "Judo - JUD05",
                        "startTime": new Date("2024-07-29T10:00"),
                        "endTime": new Date("2024-07-29T14:00")
                    },
                    {
                        "name": "Judo - JUD06",
                        "startTime": new Date("2024-07-29T16:00"),
                        "endTime": new Date("2024-07-29T19:00")
                    },
                    {
                        "name": "Judo - JUD07",
                        "startTime": new Date("2024-07-30T10:00"),
                        "endTime": new Date("2024-07-30T14:00")
                    },
                    {
                        "name": "Judo - JUD08",
                        "startTime": new Date("2024-07-30T16:00"),
                        "endTime": new Date("2024-07-30T19:00")
                    },
                    {
                        "name": "Judo - JUD09",
                        "startTime": new Date("2024-07-31T10:00"),
                        "endTime": new Date("2024-07-31T14:00")
                    },
                    {
                        "name": "Judo - JUD10",
                        "startTime": new Date("2024-07-31T16:00"),
                        "endTime": new Date("2024-07-31T19:00")
                    },
                    {
                        "name": "Judo - JUD11",
                        "startTime": new Date("2024-08-01T10:00"),
                        "endTime": new Date("2024-08-01T14:00")
                    },
                    {
                        "name": "Judo - JUD12",
                        "startTime": new Date("2024-08-01T16:00"),
                        "endTime": new Date("2024-08-01T19:00")
                    },
                    {
                        "name": "Judo - JUD13",
                        "startTime": new Date("2024-08-02T10:00"),
                        "endTime": new Date("2024-08-02T14:00")
                    },
                    {
                        "name": "Judo - JUD14",
                        "startTime": new Date("2024-08-02T16:00"),
                        "endTime": new Date("2024-08-02T19:00")
                    },
                    {
                        "name": "Judo - JUD15",
                        "startTime": new Date("2024-08-03T08:00"),
                        "endTime": new Date("2024-08-03T14:00")
                    },
                    {
                        "name": "Judo - JUD16",
                        "startTime": new Date("2024-08-03T16:00"),
                        "endTime": new Date("2024-08-03T19:00")
                    }
                ]
            }, 
            {
                id: 37,
                name: "Hockey",
                selected: false,
                sessions:[
                    {
                        "name": "Hockey - HOC01",
                        "startTime": new Date("2024-07-27T10:00"),
                        "endTime": new Date("2024-07-27T15:00")
                    },
                    {
                        "name": "Hockey - HOC02",
                        "startTime": new Date("2024-07-27T10:30"),
                        "endTime": new Date("2024-07-27T15:30")
                    },
                    {
                        "name": "Hockey - HOC03",
                        "startTime": new Date("2024-07-27T17:00"),
                        "endTime": new Date("2024-07-27T22:00")
                    },
                    {
                        "name": "Hockey - HOC04",
                        "startTime": new Date("2024-07-27T17:30"),
                        "endTime": new Date("2024-07-27T22:30")
                    },
                    {
                        "name": "Hockey - HOC05",
                        "startTime": new Date("2024-07-28T10:00"),
                        "endTime": new Date("2024-07-28T15:00")
                    },
                    {
                        "name": "Hockey - HOC06",
                        "startTime": new Date("2024-07-28T10:30"),
                        "endTime": new Date("2024-07-28T15:30")
                    },
                    {
                        "name": "Hockey - HOC07",
                        "startTime": new Date("2024-07-28T17:00"),
                        "endTime": new Date("2024-07-28T22:00")
                    },
                    {
                        "name": "Hockey - HOC08",
                        "startTime": new Date("2024-07-28T17:30"),
                        "endTime": new Date("2024-07-28T22:30")
                    },
                    {
                        "name": "Hockey - HOC09",
                        "startTime": new Date("2024-07-29T10:00"),
                        "endTime": new Date("2024-07-29T15:00")
                    },
                    {
                        "name": "Hockey - HOC10",
                        "startTime": new Date("2024-07-29T10:30"),
                        "endTime": new Date("2024-07-29T15:30")
                    },
                    {
                        "name": "Hockey - HOC11",
                        "startTime": new Date("2024-07-29T17:00"),
                        "endTime": new Date("2024-07-29T22:00")
                    },
                    {
                        "name": "Hockey - HOC12",
                        "startTime": new Date("2024-07-29T17:30"),
                        "endTime": new Date("2024-07-29T22:30")
                    },
                    {
                        "name": "Hockey - HOC13",
                        "startTime": new Date("2024-07-30T10:00"),
                        "endTime": new Date("2024-07-30T15:00")
                    },
                    {
                        "name": "Hockey - HOC14",
                        "startTime": new Date("2024-07-30T10:30"),
                        "endTime": new Date("2024-07-30T15:30")
                    },
                    {
                        "name": "Hockey - HOC15",
                        "startTime": new Date("2024-07-30T17:00"),
                        "endTime": new Date("2024-07-30T22:00")
                    },
                    {
                        "name": "Hockey - HOC16",
                        "startTime": new Date("2024-07-30T17:30"),
                        "endTime": new Date("2024-07-30T22:30")
                    },
                    {
                        "name": "Hockey - HOC17",
                        "startTime": new Date("2024-07-31T10:00"),
                        "endTime": new Date("2024-07-31T15:00")
                    },
                    {
                        "name": "Hockey - HOC18",
                        "startTime": new Date("2024-07-31T10:30"),
                        "endTime": new Date("2024-07-31T15:30")
                    },
                    {
                        "name": "Hockey - HOC19",
                        "startTime": new Date("2024-07-31T17:00"),
                        "endTime": new Date("2024-07-31T22:00")
                    },
                    {
                        "name": "Hockey - HOC20",
                        "startTime": new Date("2024-07-31T17:30"),
                        "endTime": new Date("2024-07-31T22:30")
                    },
                    {
                        "name": "Hockey - HOC21",
                        "startTime": new Date("2024-08-01T10:00"),
                        "endTime": new Date("2024-08-01T15:00")
                    },
                    {
                        "name": "Hockey - HOC22",
                        "startTime": new Date("2024-08-01T10:30"),
                        "endTime": new Date("2024-08-01T15:30")
                    },
                    {
                        "name": "Hockey - HOC23",
                        "startTime": new Date("2024-08-01T17:00"),
                        "endTime": new Date("2024-08-01T22:00")
                    },
                    {
                        "name": "Hockey - HOC24",
                        "startTime": new Date("2024-08-01T17:30"),
                        "endTime": new Date("2024-08-01T22:30")
                    },
                    {
                        "name": "Hockey - HOC25",
                        "startTime": new Date("2024-08-02T10:00"),
                        "endTime": new Date("2024-08-02T15:00")
                    },
                    {
                        "name": "Hockey - HOC26",
                        "startTime": new Date("2024-08-02T10:30"),
                        "endTime": new Date("2024-08-02T15:30")
                    },
                    {
                        "name": "Hockey - HOC27",
                        "startTime": new Date("2024-08-02T17:00"),
                        "endTime": new Date("2024-08-02T22:00")
                    },
                    {
                        "name": "Hockey - HOC28",
                        "startTime": new Date("2024-08-02T17:30"),
                        "endTime": new Date("2024-08-02T22:30")
                    },
                    {
                        "name": "Hockey - HOC29",
                        "startTime": new Date("2024-08-03T10:00"),
                        "endTime": new Date("2024-08-03T15:00")
                    },
                    {
                        "name": "Hockey - HOC30",
                        "startTime": new Date("2024-08-03T10:30"),
                        "endTime": new Date("2024-08-03T15:30")
                    },
                    {
                        "name": "Hockey - HOC31",
                        "startTime": new Date("2024-08-03T17:00"),
                        "endTime": new Date("2024-08-03T22:00")
                    },
                    {
                        "name": "Hockey - HOC32",
                        "startTime": new Date("2024-08-03T17:30"),
                        "endTime": new Date("2024-08-03T22:30")
                    },
                    {
                        "name": "Hockey - HOC33",
                        "startTime": new Date("2024-08-04T10:00"),
                        "endTime": new Date("2024-08-04T15:00")
                    },
                    {
                        "name": "Hockey - HOC34",
                        "startTime": new Date("2024-08-04T17:30"),
                        "endTime": new Date("2024-08-04T22:30")
                    },
                    {
                        "name": "Hockey - HOC35",
                        "startTime": new Date("2024-08-05T10:00"),
                        "endTime": new Date("2024-08-05T15:00")
                    },
                    {
                        "name": "Hockey - HOC36",
                        "startTime": new Date("2024-08-05T17:30"),
                        "endTime": new Date("2024-08-05T22:30")
                    },
                    {
                        "name": "Hockey - HOC37",
                        "startTime": new Date("2024-08-06T14:00"),
                        "endTime": new Date("2024-08-06T16:00")
                    },
                    {
                        "name": "Hockey - HOC38",
                        "startTime": new Date("2024-08-06T19:00"),
                        "endTime": new Date("2024-08-06T21:30")
                    },
                    {
                        "name": "Hockey - HOC39",
                        "startTime": new Date("2024-08-07T14:00"),
                        "endTime": new Date("2024-08-07T16:00")
                    },
                    {
                        "name": "Hockey - HOC40",
                        "startTime": new Date("2024-08-07T20:00"),
                        "endTime": new Date("2024-08-07T22:30")
                    },
                    {
                        "name": "Hockey - HOC41",
                        "startTime": new Date("2024-09-07T20:00"),
                        "endTime": new Date("2024-09-07T22:30")
                    }
                ]
            }, 
            {
                id: 38,
                name: "Handebol",
                selected: false,
                sessions:[
                    {
                      name: "Handebol - HBL01",
                      startTime: new Date("2024-07-25T09:00"),
                      endTime: new Date("2024-07-25T12:30"),
                    },
                    {
                      name: "Handebol - HBL02",
                      startTime: new Date("2024-07-25T14:00"),
                      endTime: new Date("2024-07-25T17:30"),
                    },
                    {
                      name: "Handebol - HBL03",
                      startTime: new Date("2024-07-25T19:00"),
                      endTime: new Date("2024-07-25T22:30"),
                    },
                    {
                      name: "Handebol - HBL04",
                      startTime: null,
                      endTime: null,
                    },
                    {
                      name: "Handebol - HBL05",
                      startTime: new Date("2024-07-27T09:00"),
                      endTime: new Date("2024-07-27T12:30"),
                    },
                    {
                      name: "Handebol - HBL06",
                      startTime: new Date("2024-07-27T14:00"),
                      endTime: new Date("2024-07-27T17:30"),
                    },
                    {
                      name: "Handebol - HBL07",
                      startTime: new Date("2024-07-27T19:00"),
                      endTime: new Date("2024-07-27T22:30"),
                    },
                    {
                      name: "Handebol - HBL08",
                      startTime: new Date("2024-07-28T09:00"),
                      endTime: new Date("2024-07-28T12:30"),
                    },
                    {
                      name: "Handebol - HBL09",
                      startTime: new Date("2024-07-28T14:00"),
                      endTime: new Date("2024-07-28T17:30"),
                    },
                    {
                      name: "Handebol - HBL10",
                      startTime: new Date("2024-07-28T19:00"),
                      endTime: new Date("2024-07-28T22:30"),
                    },
                    {
                      name: "Handebol - HBL11",
                      startTime: new Date("2024-07-29T09:00"),
                      endTime: new Date("2024-07-29T12:30"),
                    },
                    {
                      name: "Handebol - HBL12",
                      startTime: new Date("2024-07-29T14:00"),
                      endTime: new Date("2024-07-29T17:30"),
                    },
                    {
                      name: "Handebol - HBL13",
                      startTime: new Date("2024-07-30T09:00"),
                      endTime: new Date("2024-07-30T12:30"),
                    },
                    {
                      name: "Handebol - HBL14",
                      startTime: new Date("2024-07-30T14:00"),
                      endTime: new Date("2024-07-30T17:30"),
                    },
                    {
                      name: "Handebol - HBL15",
                      startTime: new Date("2024-07-30T19:00"),
                      endTime: new Date("2024-07-30T22:30"),
                    },
                    {
                      name: "Handebol - HBL16",
                      startTime: new Date("2024-07-31T09:00"),
                      endTime: new Date("2024-07-31T12:30"),
                    },
                    {
                      name: "Handebol - HBL17",
                      startTime: new Date("2024-07-31T14:00"),
                      endTime: new Date("2024-07-31T17:30"),
                    },
                    {
                      name: "Handebol - HBL18",
                      startTime: new Date("2024-07-31T19:00"),
                      endTime: new Date("2024-07-31T22:30"),
                    },
                    {
                      name: "Handebol - HBL19",
                      startTime: new Date("2024-08-01T09:00"),
                      endTime: new Date("2024-08-01T12:30"),
                    },
                    {
                      name: "Handebol - HBL20",
                      startTime: new Date("2024-08-01T14:00"),
                      endTime: new Date("2024-08-01T17:30"),
                    },
                    {
                      name: "Handebol - HBL21",
                      startTime: new Date("2024-08-01T19:00"),
                      endTime: new Date("2024-08-01T22:30"),
                    },
                    {
                      name: "Handebol - HBL22",
                      startTime: new Date("2024-08-02T09:00"),
                      endTime: new Date("2024-08-02T12:30"),
                    },
                    {
                      name: "Handebol - HBL23",
                      startTime: new Date("2024-08-02T14:00"),
                      endTime: new Date("2024-08-02T17:30"),
                    },
                    {
                      name: "Handebol - HBL24",
                      startTime: new Date("2024-08-02T19:00"),
                      endTime: new Date("2024-08-02T22:30"),
                    },
                    {
                      name: "Handebol - HBL25",
                      startTime: new Date("2024-08-03T09:00"),
                      endTime: new Date("2024-08-03T12:30"),
                    },
                    {
                      name: "Handebol - HBL26",
                      startTime: new Date("2024-08-03T14:00"),
                      endTime: new Date("2024-08-03T17:30"),
                    },
                    {
                      name: "Handebol - HBL27",
                      startTime: new Date("2024-08-03T19:00"),
                      endTime: new Date("2024-08-03T22:30"),
                    },
                    {
                      name: "Handebol - HBL28",
                      startTime: new Date("2024-08-04T09:00"),
                      endTime: new Date("2024-08-04T12:30"),
                    },
                    {
                      name: "Handebol - HBL29",
                      startTime: new Date("2024-08-04T14:00"),
                      endTime: new Date("2024-08-04T17:30"),
                    },
                    {
                      name: "Handebol - HBL30",
                      startTime: new Date("2024-08-04T19:00"),
                      endTime: new Date("2024-08-04T22:30"),
                    },
                    {
                      name: "Handebol - HBL31",
                      startTime: new Date("2024-08-05T09:00"),
                      endTime: new Date("2024-08-05T12:30"),
                    },
                    {
                      name: "Handebol - HBL32",
                      startTime: new Date("2024-08-05T14:00"),
                      endTime: new Date("2024-08-05T17:30"),
                    },
                    {
                      name: "Handebol - HBL33",
                      startTime: new Date("2024-08-05T19:00"),
                      endTime: new Date("2024-08-05T22:30"),
                    },
                    {
                      name: "Handebol - HBL34",
                      startTime: new Date("2024-08-06T09:30"),
                      endTime: new Date("2024-08-06T11:30"),
                    },
                    {
                      name: "Handebol - HBL35",
                      startTime: new Date("2024-08-06T13:30"),
                      endTime: new Date("2024-08-06T15:30"),
                    },
                    {
                      name: "Handebol - HBL36",
                      startTime: new Date("2024-08-07T09:30"),
                      endTime: new Date("2024-08-07T11:30"),
                    },
                    {
                      name: "Handebol - HBL37",
                      startTime: new Date("2024-08-07T13:30"),
                      endTime: new Date("2024-08-07T15:30"),
                    },
                    {
                      name: "Handebol - HBL38",
                      startTime: new Date("2024-08-07T16:30"),
                      endTime: new Date("2024-08-07T18:30"),
                    },
                    {
                      name: "Handebol - HBL39",
                      startTime: new Date("2024-08-07T21:30"),
                      endTime: new Date("2024-08-07T23:30"),
                    },
                    {
                      name: "Handebol - HBL40",
                      startTime: new Date("2024-08-08T16:30"),
                      endTime: new Date("2024-08-08T18:30"),
                    },
                    {
                      name: "Handebol - HBL41",
                      startTime: new Date("2024-08-08T21:30"),
                      endTime: new Date("2024-08-08T23:30"),
                    },
                    {
                      name: "Handebol - HBL42",
                      startTime: new Date("2024-08-09T16:30"),
                      endTime: new Date("2024-08-09T18:30"),
                    },
                    {
                      name: "Handebol - HBL43",
                      startTime: new Date("2024-08-09T21:30"),
                      endTime: new Date("2024-08-09T23:30"),
                    },
                    {
                      name: "Handebol - HBL44",
                      startTime: new Date("2024-08-10T10:00"),
                      endTime: new Date("2024-08-10T12:00"),
                    },
                    {
                      name: "Handebol - HBL45",
                      startTime: new Date("2024-08-10T15:00"),
                      endTime: new Date("2024-08-10T17:30"),
                    },
                    {
                      name: "Handebol - HBL46",
                      startTime: new Date("2024-08-11T09:00"),
                      endTime: new Date("2024-08-11T11:00"),
                    },
                    
                ]
            }, 
            {
                id: 39,
                name: "Ginástica de Trampolim ",
                selected: false,
                sessions:[
                    {
                      name: "Ginástica de Trampolim - GTR01",
                      startTime: new Date("2024-08-02T12:00"),
                      endTime: new Date("2024-08-02T14:30"),
                    },
                    {
                      name: "Ginástica de Trampolim  - GTR02",
                      startTime: new Date("2024-08-02T18:00"),
                      endTime: new Date("2024-08-02T20:30"),
                    }
                ]
            }, 
            {
                id: 40,
                name: "Ginástica Rítmica",
                selected: false,
                sessions:[
                    {
                      name: "Ginástica Rítmica - GRY01",
                      startTime: new Date("2024-08-08T10:00"),
                      endTime: new Date("2024-08-08T13:00"),
                    },
                    {
                      name: "Ginástica Rítmica - GRY02",
                      startTime: new Date("2024-08-08T15:00"),
                      endTime: new Date("2024-08-08T18:00"),
                    },
                    {
                      name: "Ginástica Rítmica - GRY03",
                      startTime: new Date("2024-08-09T10:00"),
                      endTime: new Date("2024-08-09T12:30"),
                    },
                    {
                      name: "Ginástica Rítmica - GRY04",
                      startTime: new Date("2024-08-09T14:30"),
                      endTime: new Date("2024-08-09T17:00"),
                    },
                    {
                      name: "Ginástica Rítmica - GRY05",
                      startTime: new Date("2024-08-10T14:00"),
                      endTime: new Date("2024-08-10T15:45"),
                    }
                ]
            }, 
            {
                id: 41,
                name: "Golf",
                selected: false,
                sessions:[
                    {
                      name: "Golf - GLF01",
                      startTime: new Date("2024-08-01T09:00"),
                      endTime: new Date("2024-08-01T18:00"),
                    },
                    {
                      name: "Golf - GLF02",
                      startTime: new Date("2024-08-02T09:00"),
                      endTime: new Date("2024-08-02T18:00"),
                    },
                    {
                      name: "Golf - GLF03",
                      startTime: new Date("2024-08-03T09:00"),
                      endTime: new Date("2024-08-03T18:00"),
                    },
                    {
                      name: "Golf - GLF04",
                      startTime: new Date("2024-08-04T09:00"),
                      endTime: new Date("2024-08-04T18:30"),
                    },
                    {
                      name: "Golf - GLF05",
                      startTime: new Date("2024-08-07T09:00"),
                      endTime: new Date("2024-08-07T18:00"),
                    },
                    {
                      name: "Golf - GLF06",
                      startTime: new Date("2024-08-08T09:00"),
                      endTime: new Date("2024-08-08T18:00"),
                    },
                    {
                      name: "Golf - GLF07",
                      startTime: new Date("2024-08-09T09:00"),
                      endTime: new Date("2024-08-09T18:00"),
                    },
                    {
                      name: "Golf - GLF08",
                      startTime: new Date("2024-08-10T09:00"),
                      endTime: new Date("2024-08-10T18:30"),
                    }
                ]
            }, 
            {
                id: 42,
                name: "Ginástica Artística",
                selected: false,
                sessions:[
                    {
                      name: "Ginástica Artística - GAR01",
                      startTime: new Date("2024-07-27T11:00"),
                      endTime: new Date("2024-07-27T13:30"),
                    },
                    {
                      name: "Ginástica Artística - GAR02",
                      startTime: new Date("2024-07-27T15:30"),
                      endTime: new Date("2024-07-27T18:00"),
                    },
                    {
                      name: "Ginástica Artística - GAR03",
                      startTime: new Date("2024-07-27T20:00"),
                      endTime: new Date("2024-07-27T22:30"),
                    },
                    {
                      name: "Ginástica Artística - GAR04",
                      startTime: new Date("2024-07-28T09:30"),
                      endTime: new Date("2024-07-28T13:20"),
                    },
                    {
                      name: "Ginástica Artística - GAR05",
                      startTime: new Date("2024-07-28T14:50"),
                      endTime: new Date("2024-07-28T16:30"),
                    },
                    {
                      name: "Ginástica Artística - GAR06",
                      startTime: new Date("2024-07-28T18:00"),
                      endTime: new Date("2024-07-28T19:40"),
                    },
                    {
                      name: "Ginástica Artística - GAR07",
                      startTime: new Date("2024-07-28T21:10"),
                      endTime: new Date("2024-07-28T22:50"),
                    },
                    {
                      name: "Ginástica Artística - GAR08",
                      startTime: new Date("2024-07-29T17:30"),
                      endTime: new Date("2024-07-29T20:30"),
                    },
                    {
                      name: "Ginástica Artística - GAR09",
                      startTime: new Date("2024-07-30T18:15"),
                      endTime: new Date("2024-07-30T20:30"),
                    },
                    {
                      name: "Ginástica Artística - GAR10",
                      startTime: new Date("2024-07-31T17:30"),
                      endTime: new Date("2024-07-31T20:15"),
                    },
                    {
                      name: "Ginástica Artística - GAR11",
                      startTime: new Date("2024-08-01T18:15"),
                      endTime: new Date("2024-08-01T20:25"),
                    },
                    {
                      name: "Ginástica Artística - GAR12",
                      startTime: new Date("2024-08-03T15:30"),
                      endTime: new Date("2024-08-03T18:00"),
                    },
                    {
                      name: "Ginástica Artística - GAR13",
                      startTime: new Date("2024-08-04T15:00"),
                      endTime: new Date("2024-08-04T17:25"),
                    },
                    {
                      name: "Ginástica Artística - GAR14",
                      startTime: new Date("2024-08-05T12:00"),
                      endTime: new Date("2024-08-05T15:15"),
                    }
                ]
            }, 
            {
                id: 43,
                name: "Esgrima",
                selected: false,
                sessions:[
                    {
                      name: "Esgrima - FEN01",
                      startTime: new Date("2024-07-27T10:00"),
                      endTime: new Date("2024-07-27T16:40"),
                    },
                    {
                      name: "Esgrima - FEN02",
                      startTime: new Date("2024-07-27T19:00"),
                      endTime: new Date("2024-07-27T22:50"),
                    },
                    {
                      name: "Esgrima - FEN03",
                      startTime: new Date("2024-07-28T09:30"),
                      endTime: new Date("2024-07-28T16:50"),
                    },
                    {
                      name: "Esgrima - FEN04",
                      startTime: new Date("2024-07-28T19:00"),
                      endTime: new Date("2024-07-28T23:10"),
                    },
                    {
                      name: "Esgrima - FEN05",
                      startTime: new Date("2024-07-29T10:00"),
                      endTime: new Date("2024-07-29T16:40"),
                    },
                    {
                      name: "Esgrima - FEN06",
                      startTime: new Date("2024-07-29T19:00"),
                      endTime: new Date("2024-07-29T22:50"),
                    },
                    {
                      name: "Esgrima - FEN07",
                      startTime: new Date("2024-07-30T09:30"),
                      endTime: new Date("2024-07-30T16:50"),
                    },
                    {
                      name: "Esgrima - FEN08",
                      startTime: new Date("2024-07-30T19:00"),
                      endTime: new Date("2024-07-30T23:10"),
                    },
                    {
                      name: "Esgrima - FEN09",
                      startTime: new Date("2024-07-31T10:00"),
                      endTime: new Date("2024-07-31T16:40"),
                    },
                    {
                      name: "Esgrima - FEN10",
                      startTime: new Date("2024-07-31T19:00"),
                      endTime: new Date("2024-07-31T22:50"),
                    },
                    {
                      name: "Esgrima - FEN11",
                      startTime: new Date("2024-08-01T09:30"),
                      endTime: new Date("2024-08-01T16:50"),
                    },
                    {
                      name: "Esgrima - FEN12",
                      startTime: new Date("2024-08-01T19:00"),
                      endTime: new Date("2024-08-01T23:10"),
                    },
                    {
                      name: "Esgrima - FEN13",
                      startTime: new Date("2024-08-02T10:00"),
                      endTime: new Date("2024-08-02T16:40"),
                    },
                    {
                      name: "Esgrima - FEN14",
                      startTime: new Date("2024-08-02T19:00"),
                      endTime: new Date("2024-08-02T22:50"),
                    },
                    {
                      name: "Esgrima - FEN15",
                      startTime: new Date("2024-08-03T09:30"),
                      endTime: new Date("2024-08-03T16:50"),
                    },
                    {
                      name: "Esgrima - FEN16",
                      startTime: new Date("2024-08-03T19:00"),
                      endTime: new Date("2024-08-03T23:10"),
                    },
                    {
                      name: "Esgrima - FEN17",
                      startTime: new Date("2024-08-04T10:00"),
                      endTime: new Date("2024-08-04T17:10"),
                    },
                    {
                      name: "Esgrima - FEN18",
                      startTime: new Date("2024-08-04T19:10"),
                      endTime: new Date("2024-08-04T22:10"),
                    }
                  ]     
            },
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