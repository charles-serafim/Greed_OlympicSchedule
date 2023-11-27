// dados das competições
const categories = [
    {
        id: 1,
        name: "Athletics",
        selected: false,
        sessions: [
            {
                name: "Athletics - ATH01",
                startTime: new Date("2024-08-01T07:30"),
                endTime: new Date("2024-08-01T11:45"),
            },
            {
                name: "Athletics - ATH02",
                startTime: new Date("2024-08-02T10:00"),
                endTime: new Date("2024-08-02T13:00"),
            },
            {
                name: "Athletics - ATH03",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:00"),
            },
            {
                name: "Athletics - ATH04",
                startTime: new Date("2024-08-03T10:00"),
                endTime: new Date("2024-08-03T16:00"),
            },
            {
                name: "Athletics - ATH05",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:00"),
            },
            {
                name: "Athletics - ATH06",
                startTime: new Date("2024-08-04T10:00"),
                endTime: new Date("2024-08-04T13:00"),
            },
            {
                name: "Athletics - ATH07",
                startTime: new Date("2024-08-04T19:00"),
                endTime: new Date("2024-08-04T22:00"),
            },
            {
                name: "Athletics - ATH08",
                startTime: new Date("2024-08-05T10:00"),
                endTime: new Date("2024-08-05T13:00"),
            },
            {
                name: "Athletics - ATH09",
                startTime: new Date("2024-08-05T19:00"),
                endTime: new Date("2024-08-05T22:00"),
            },
            {
                name: "Athletics - ATH10",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T13:00"),
            },
            {
                name: "Athletics - ATH11",
                startTime: new Date("2024-08-06T19:00"),
                endTime: new Date("2024-08-06T22:00"),
            },
            {
                name: "Athletics - ATH12",
                startTime: new Date("2024-08-07T07:30"),
                endTime: new Date("2024-08-07T11:00"),
            },
            {
                name: "Athletics - ATH13",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T13:00"),
            },
            {
                name: "Athletics - ATH14",
                startTime: new Date("2024-08-07T19:00"),
                endTime: new Date("2024-08-07T22:00"),
            },
            {
                name: "Athletics - ATH15",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:00"),
            },
            {
                name: "Athletics - ATH16",
                startTime: new Date("2024-08-08T19:00"),
                endTime: new Date("2024-08-08T22:00"),
            },
            {
                name: "Athletics - ATH17",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T13:00"),
            },
            {
                name: "Athletics - ATH18",
                startTime: new Date("2024-08-09T19:00"),
                endTime: new Date("2024-08-09T22:00"),
            },
            {
                name: "Athletics - ATH19",
                startTime: new Date("2024-08-10T08:00"),
                endTime: new Date("2024-08-10T11:15"),
            },
            {
                name: "Athletics - ATH20",
                startTime: new Date("2024-08-10T19:00"),
                endTime: new Date("2024-08-10T22:00"),
            },
            {
                name: "Athletics - ATH21",
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
        name: "Basketball 3X3",
        selected: false,
        sessions: [
            {
                name: "Basketball 3X3 - BK301",
                startTime: new Date("2024-07-30T17:30"),
                endTime: new Date("2024-07-30T19:30"),
            },
            {
                name: "Basketball 3X3 - BK302",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Basketball 3X3 - BK303",
                startTime: new Date("2024-07-31T17:30"),
                endTime: new Date("2024-07-31T19:30"),
            },
            {
                name: "Basketball 3X3 - BK304",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Basketball 3X3 - BK305",
                startTime: new Date("2024-08-01T09:00"),
                endTime: new Date("2024-08-01T11:00"),
            },
            {
                name: "Basketball 3X3 - BK306",
                startTime: new Date("2024-08-01T12:30"),
                endTime: new Date("2024-08-01T14:30"),
            },
            {
                name: "Basketball 3X3 - BK307",
                startTime: new Date("2024-08-01T18:00"),
                endTime: new Date("2024-08-01T20:00"),
            },
            {
                name: "Basketball 3X3 - BK308",
                startTime: new Date("2024-08-01T21:30"),
                endTime: new Date("2024-08-01T23:30"),
            },
            {
                name: "Basketball 3X3 - BK309",
                startTime: new Date("2024-08-02T09:00"),
                endTime: new Date("2024-08-02T11:00"),
            },
            {
                name: "Basketball 3X3 - BK310",
                startTime: new Date("2024-08-02T12:30"),
                endTime: new Date("2024-08-02T14:30"),
            },
            {
                name: "Basketball 3X3 - BK311",
                startTime: new Date("2024-08-02T17:30"),
                endTime: new Date("2024-08-02T19:30"),
            },
            {
                name: "Basketball 3X3 - BK312",
                startTime: new Date("2024-08-02T21:00"),
                endTime: new Date("2024-08-02T23:00"),
            },
            {
                name: "Basketball 3X3 - BK313",
                startTime: new Date("2024-08-03T17:30"),
                endTime: new Date("2024-08-03T19:30"),
            },
            {
                name: "Basketball 3X3 - BK314",
                startTime: new Date("2024-08-03T21:30"),
                endTime: new Date("2024-08-03T23:30"),
            },
            {
                name: "Basketball 3X3 - BK315",
                startTime: new Date("2024-08-04T17:30"),
                endTime: new Date("2024-08-04T19:30"),
            },
            {
                name: "Basketball 3X3 - BK316",
                startTime: new Date("2024-08-04T21:30"),
                endTime: new Date("2024-08-04T23:30"),
            },
            {
                name: "Basketball 3X3 - BK317",
                startTime: new Date("2024-08-05T17:30"),
                endTime: new Date("2024-08-05T19:30"),
            },
            {
                name: "Basketball 3X3 - BK318",
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
        name: "Archery",
        selected: false,
        sessions: [
            {
                name: "Archery - ARC01",
                startTime: new Date("2024-07-25T09:30"),
                endTime: new Date("2024-07-25T12:30"),
            },
            {
                name: "Archery - ARC02",
                startTime: new Date("2024-07-25T14:15"),
                endTime: new Date("2024-07-25T17:15"),
            },
            {
                name: "Archery - ARC03",
                startTime: new Date("2024-07-28T09:30"),
                endTime: new Date("2024-07-28T11:05"),
            },
            {
                name: "Archery - ARC04",
                startTime: new Date("2024-07-28T14:15"),
                endTime: new Date("2024-07-28T17:55"),
            },
            {
                name: "Archery - ARC05",
                startTime: new Date("2024-07-29T09:30"),
                endTime: new Date("2024-07-29T11:05"),
            },
            {
                name: "Archery - ARC06",
                startTime: new Date("2024-07-29T14:15"),
                endTime: new Date("2024-07-29T17:55"),
            },
            {
                name: "Archery - ARC07",
                startTime: new Date("2024-07-30T12:00"),
                endTime: new Date("2024-07-30T15:55"),
            },
            {
                name: "Archery - ARC08",
                startTime: new Date("2024-07-30T17:45"),
                endTime: new Date("2024-07-30T20:25"),
            },
            {
                name: "Archery - ARC09",
                startTime: new Date("2024-07-31T12:00"),
                endTime: new Date("2024-07-31T15:55"),
            },
            {
                name: "Archery - ARC10",
                startTime: new Date("2024-07-31T17:45"),
                endTime: new Date("2024-07-31T20:25"),
            },
            {
                name: "Archery - ARC11",
                startTime: new Date("2024-08-01T09:30"),
                endTime: new Date("2024-08-01T13:25"),
            },
            {
                name: "Archery - ARC12",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T19:25"),
            },
            {
                name: "Archery - ARC13",
                startTime: new Date("2024-08-02T09:30"),
                endTime: new Date("2024-08-02T12:05"),
            },
            {
                name: "Archery - ARC14",
                startTime: new Date("2024-08-02T14:15"),
                endTime: new Date("2024-08-02T17:25"),
            },
            {
                name: "Archery - ARC15",
                startTime: new Date("2024-08-03T09:30"),
                endTime: new Date("2024-08-03T11:15"),
            },
            {
                name: "Archery - ARC16",
                startTime: new Date("2024-08-03T13:00"),
                endTime: new Date("2024-08-03T15:20"),
            },
            {
                name: "Archery - ARC17",
                startTime: new Date("2024-08-04T09:30"),
                endTime: new Date("2024-08-04T11:15"),
            },
            {
                name: "Archery - ARC18",
                startTime: new Date("2024-08-04T13:00"),
                endTime: new Date("2024-08-04T15:20"),
            },
        ],
    },
    {
        id: 8,
        name: "Boxing",
        selected: false,
        sessions: [
            {
                name: "Boxing - BOX01",
                startTime: new Date("2024-07-27T15:30"),
                endTime: new Date("2024-07-27T17:30"),
            },
            {
                name: "Boxing - BOX02",
                startTime: new Date("2024-07-27T20:00"),
                endTime: new Date("2024-07-27T22:15"),
            },
            {
                name: "Boxing - BOX03",
                startTime: new Date("2024-07-28T11:00"),
                endTime: new Date("2024-07-28T13:00"),
            },
            {
                name: "Boxing - BOX04",
                startTime: new Date("2024-07-28T15:30"),
                endTime: new Date("2024-07-28T17:45"),
            },
            {
                name: "Boxing - BOX05",
                startTime: new Date("2024-07-28T20:00"),
                endTime: new Date("2024-07-28T22:00"),
            },
            {
                name: "Boxing - BOX06",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T13:00"),
            },
            {
                name: "Boxing - BOX07",
                startTime: new Date("2024-07-29T15:30"),
                endTime: new Date("2024-07-29T17:30"),
            },
            {
                name: "Boxing - BOX08",
                startTime: new Date("2024-07-29T20:00"),
                endTime: new Date("2024-07-29T22:00"),
            },
            {
                name: "Boxing - BOX09",
                startTime: new Date("2024-07-30T11:00"),
                endTime: new Date("2024-07-30T13:30"),
            },
            {
                name: "Boxing - BOX10",
                startTime: new Date("2024-07-30T15:30"),
                endTime: new Date("2024-07-30T18:00"),
            },
            {
                name: "Boxing - BOX11",
                startTime: new Date("2024-07-30T20:00"),
                endTime: new Date("2024-07-30T22:30"),
            },
            {
                name: "Boxing - BOX12",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T13:15"),
            },
            {
                name: "Boxing - BOX13",
                startTime: new Date("2024-07-31T15:30"),
                endTime: new Date("2024-07-31T18:00"),
            },
            {
                name: "Boxing - BOX14",
                startTime: new Date("2024-07-31T20:00"),
                endTime: new Date("2024-07-31T22:15"),
            },
            {
                name: "Boxing - BOX15",
                startTime: new Date("2024-08-01T11:00"),
                endTime: new Date("2024-08-01T13:15"),
            },
            {
                name: "Boxing - BOX16",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T18:00"),
            },
            {
                name: "Boxing - BOX17",
                startTime: new Date("2024-08-01T20:00"),
                endTime: new Date("2024-08-01T22:15"),
            },
            {
                name: "Boxing - BOX18",
                startTime: new Date("2024-08-02T15:30"),
                endTime: new Date("2024-08-02T18:00"),
            },
            {
                name: "Boxing - BOX19",
                startTime: new Date("2024-08-02T20:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
            {
                name: "Boxing - BOX20",
                startTime: new Date("2024-08-03T15:30"),
                endTime: new Date("2024-08-03T17:45"),
            },
            {
                name: "Boxing - BOX21",
                startTime: new Date("2024-08-03T20:00"),
                endTime: new Date("2024-08-03T22:15"),
            },
            {
                name: "Boxing - BOX22",
                startTime: new Date("2024-08-04T11:00"),
                endTime: new Date("2024-08-04T13:15"),
            },
            {
                name: "Boxing - BOX23",
                startTime: new Date("2024-08-04T15:30"),
                endTime: new Date("2024-08-04T17:45"),
            },
            {
                name: "Boxing - BOX24",
                startTime: new Date("2024-08-06T21:30"),
                endTime: new Date("2024-08-06T23:30"),
            },
            {
                name: "Boxing - BOX25",
                startTime: new Date("2024-08-07T21:30"),
                endTime: new Date("2024-08-07T23:30"),
            },
            {
                name: "Boxing - BOX26",
                startTime: new Date("2024-08-08T21:30"),
                endTime: new Date("2024-08-08T23:30"),
            },
            {
                name: "Boxing - BOX27",
                startTime: new Date("2024-08-09T21:30"),
                endTime: new Date("2024-08-09T23:30"),
            },
            {
                name: "Boxing - BOX28",
                startTime: new Date("2024-08-10T21:30"),
                endTime: new Date("2024-08-10T23:30"),
            }
        ]
    },
    {
        id: 9,
        name: "Canoe Slalom",
        selected: false,
        sessions: [
            {
                name: "Canoe Slalom - CSL01",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T19:10"),
            },
            {
                name: "Canoe Slalom - CSL02",
                startTime: new Date("2024-07-28T15:30"),
                endTime: new Date("2024-07-28T18:50"),
            },
            {
                name: "Canoe Slalom - CSL03",
                startTime: new Date("2024-07-29T15:30"),
                endTime: new Date("2024-07-29T18:30"),
            },
            {
                name: "Canoe Slalom - CSL04",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T19:10"),
            },
            {
                name: "Canoe Slalom - CSL05",
                startTime: new Date("2024-07-31T15:30"),
                endTime: new Date("2024-07-31T18:30"),
            },
            {
                name: "Canoe Slalom - CSL06",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T18:35"),
            },
            {
                name: "Canoe Slalom - CSL07",
                startTime: new Date("2024-08-03T15:30"),
                endTime: new Date("2024-08-03T18:30"),
            },
            {
                name: "Canoe Slalom - CSL08",
                startTime: new Date("2024-08-04T15:30"),
                endTime: new Date("2024-08-04T17:25"),
            },
            {
                name: "Canoe Slalom - CSL09",
                startTime: new Date("2024-08-05T15:30"),
                endTime: new Date("2024-08-05T17:30"),
            }
        ]
    },
    {
        id: 10,
        name: "Canoe Sprint",
        selected: false,
        sessions: [
            {
                name: "Canoe Sprint - CSP01",
                startTime: new Date("2024-08-06T09:30"),
                endTime: new Date("2024-08-06T15:10"),
            },
            {
                name: "Canoe Sprint - CSP02",
                startTime: new Date("2024-08-07T09:30"),
                endTime: new Date("2024-08-07T14:50"),
            },
            {
                name: "Canoe Sprint - CSP03",
                startTime: new Date("2024-08-08T10:30"),
                endTime: new Date("2024-08-08T14:30"),
            },
            {
                name: "Canoe Sprint - CSP04",
                startTime: new Date("2024-08-09T10:30"),
                endTime: new Date("2024-08-09T14:20"),
            },
            {
                name: "Canoe Sprint - CSP05",
                startTime: new Date("2024-08-10T09:30"),
                endTime: new Date("2024-08-10T13:10"),
            }
        ]
    },
    {
        id: 11,
        name: "Road cycling",
        selected: false,
        sessions: [
            {
                name: "Road cycling - CRD01",
                startTime: new Date("2024-07-27T14:30"),
                endTime: new Date("2024-07-27T18:30"),
            },
            {
                name: "Road cycling - CRD02",
                startTime: new Date("2024-08-03T11:00"),
                endTime: new Date("2024-08-03T18:15"),
            },
            {
                name: "Road cycling - CRD03",
                startTime: new Date("2024-08-04T14:00"),
                endTime: new Date("2024-08-04T18:45"),
            }
        ]
    },
    {
        id: 12,
        name: "Track cycling",
        selected: false,
        sessions: [
            {
                name: "Track cycling - CTR01",
                startTime: new Date("2024-08-05T17:00"),
                endTime: new Date("2024-08-05T19:40"),
            },
            {
                name: "Track cycling - CTR02",
                startTime: new Date("2024-08-06T17:30"),
                endTime: new Date("2024-08-06T19:55"),
            },
            {
                name: "Track cycling - CTR03",
                startTime: new Date("2024-08-07T12:45"),
                endTime: new Date("2024-08-07T15:30"),
            },
            {
                name: "Track cycling - CTR04",
                startTime: new Date("2024-08-07T17:30"),
                endTime: new Date("2024-08-07T19:50"),
            },
            {
                name: "Track cycling - CTR05",
                startTime: new Date("2024-08-08T17:00"),
                endTime: new Date("2024-08-08T19:55"),
            },
            {
                name: "Track cycling - CTR06",
                startTime: new Date("2024-08-09T14:00"),
                endTime: new Date("2024-08-09T15:45"),
            },
            {
                name: "Track cycling - CTR07",
                startTime: new Date("2024-08-09T18:00"),
                endTime: new Date("2024-08-09T19:55"),
            },
            {
                name: "Track cycling - CTR08",
                startTime: new Date("2024-08-10T17:00"),
                endTime: new Date("2024-08-10T19:50"),
            },
            {
                name: "Track cycling - CTR09",
                startTime: new Date("2024-08-11T11:00"),
                endTime: new Date("2024-08-11T14:15"),
            }
        ]
    },
    {
        id: 13,
        name: "Sport climbing",
        selected: false,
        sessions: [
            {
                name: "Sport climbing - CLB01",
                startTime: new Date("2024-08-05T10:00"),
                endTime: new Date("2024-08-05T14:00"),
            },
            {
                name: "Sport climbing - CLB02",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T14:00"),
            },
            {
                name: "Sport climbing - CLB03",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T13:15"),
            },
            {
                name: "Sport climbing - CLB04",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:15"),
            },
            {
                name: "Sport climbing - CLB05",
                startTime: new Date("2024-08-09T10:15"),
                endTime: new Date("2024-08-09T13:20"),
            },
            {
                name: "Sport climbing - CLB06",
                startTime: new Date("2024-08-10T10:15"),
                endTime: new Date("2024-08-10T13:20"),
            }
        ]
    },
    {
        id: 14,
        name: "Diving",
        selected: false,
        sessions: [
            {
                name: "Diving - DIV01",
                startTime: new Date("2024-07-27T11:00"),
                endTime: new Date("2024-07-27T12:00"),
            },
            {
                name: "Diving - DIV02",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T12:00"),
            },
            {
                name: "Diving - DIV03",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T12:00"),
            },
            {
                name: "Diving - DIV04",
                startTime: new Date("2024-08-02T11:00"),
                endTime: new Date("2024-08-02T12:00"),
            },
            {
                name: "Diving - DIV05",
                startTime: new Date("2024-08-05T09:45"),
                endTime: new Date("2024-08-05T12:00"),
            },
            {
                name: "Diving - DIV06",
                startTime: new Date("2024-08-05T15:00"),
                endTime: new Date("2024-08-05T17:00"),
            },
            {
                name: "Diving - DIV07",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T12:00"),
            },
            {
                name: "Diving - DIV08",
                startTime: new Date("2024-08-06T15:00"),
                endTime: new Date("2024-08-06T17:00"),
            },
            {
                name: "Diving - DIV09",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T12:00"),
            },
            {
                name: "Diving - DIV10",
                startTime: new Date("2024-08-07T15:00"),
                endTime: new Date("2024-08-07T17:00"),
            },
            {
                name: "Diving - DIV11",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T12:00"),
            },
            {
                name: "Diving - DIV12",
                startTime: new Date("2024-08-08T15:00"),
                endTime: new Date("2024-08-08T17:00"),
            },
            {
                name: "Diving - DIV13",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T12:00"),
            },
            {
                name: "Diving - DIV14",
                startTime: new Date("2024-08-09T15:00"),
                endTime: new Date("2024-08-09T17:00"),
            },
            {
                name: "Diving - DIV15",
                startTime: new Date("2024-08-10T10:00"),
                endTime: new Date("2024-08-10T12:00"),
            },
            {
                name: "Diving - DIV16",
                startTime: new Date("2024-08-10T15:00"),
                endTime: new Date("2024-08-10T17:00"),
            }
        ]
    },
    {
        id: 15,
        name: "Equestrian",
        selected: false,
        sessions: [
            {
                name: "Equestrian - EQU01",
                startTime: new Date("2024-07-27T10:00"),
                endTime: new Date("2024-07-27T18:40"),
            },
            {
                name: "Equestrian - EQU02",
                startTime: new Date("2024-07-28T10:30"),
                endTime: new Date("2024-07-28T15:00"),
            },
            {
                name: "Equestrian - EQU03",
                startTime: new Date("2024-07-29T11:00"),
                endTime: new Date("2024-07-29T16:30"),
            },
            {
                name: "Equestrian - EQU04",
                startTime: new Date("2024-07-30T11:00"),
                endTime: new Date("2024-07-30T16:00"),
            },
            {
                name: "Equestrian - EQU05",
                startTime: new Date("2024-07-31T11:00"),
                endTime: new Date("2024-07-31T16:00"),
            },
            {
                name: "Equestrian - EQU06",
                startTime: new Date("2024-08-01T10:00"),
                endTime: new Date("2024-08-01T15:45"),
            },
            {
                name: "Equestrian - EQU07",
                startTime: new Date("2024-08-02T14:00"),
                endTime: new Date("2024-08-02T17:45"),
            },
            {
                name: "Equestrian - EQU08",
                startTime: new Date("2024-08-03T10:00"),
                endTime: new Date("2024-08-03T12:30"),
            },
            {
                name: "Equestrian - EQU09",
                startTime: new Date("2024-08-04T11:00"),
                endTime: new Date("2024-08-04T15:30"),
            },
            {
                name: "Equestrian - EQU10",
                startTime: new Date("2024-08-05T11:00"),
                endTime: new Date("2024-08-05T13:45"),
            },
            {
                name: "Equestrian - EQU11",
                startTime: new Date("2024-08-06T14:00"),
                endTime: new Date("2024-08-06T16:30"),
            }
        ]
    },
    {
        id: 16,
        name: "Football",
        selected: false,
        sessions: [
            {
                name: "Football - FBL01",
                startTime: new Date("2024-07-24T15:00"),
                endTime: new Date("2024-07-24T17:00"),
            },
            {
                name: "Football - FBL02",
                startTime: new Date("2024-07-24T15:00"),
                endTime: new Date("2024-07-24T17:00"),
            },
            {
                name: "Football - FBL03",
                startTime: new Date("2024-07-24T17:00"),
                endTime: new Date("2024-07-24T19:00"),
            },
            {
                name: "Football - FBL04",
                startTime: new Date("2024-07-24T17:00"),
                endTime: new Date("2024-07-24T19:00"),
            },
            {
                name: "Football - FBL05",
                startTime: new Date("2024-07-24T19:00"),
                endTime: new Date("2024-07-24T21:00"),
            },
            {
                name: "Football - FBL06",
                startTime: new Date("2024-07-24T19:00"),
                endTime: new Date("2024-07-24T21:00"),
            },
            {
                name: "Football - FBL07",
                startTime: new Date("2024-07-24T21:00"),
                endTime: new Date("2024-07-24T23:00"),
            },
            {
                name: "Football - FBL08",
                startTime: new Date("2024-07-24T21:00"),
                endTime: new Date("2024-07-24T23:00"),
            },
            {
                name: "Football - FBL09",
                startTime: new Date("2024-07-25T17:00"),
                endTime: new Date("2024-07-25T19:00"),
            },
            {
                name: "Football - FBL10",
                startTime: new Date("2024-07-25T17:00"),
                endTime: new Date("2024-07-25T19:00"),
            },
            {
                name: "Football - FBL11",
                startTime: new Date("2024-07-25T19:00"),
                endTime: new Date("2024-07-25T21:00"),
            },
            {
                name: "Football - FBL12",
                startTime: new Date("2024-07-25T19:00"),
                endTime: new Date("2024-07-25T21:00"),
            },
            {
                name: "Football - FBL13",
                startTime: new Date("2024-07-25T21:00"),
                endTime: new Date("2024-07-25T23:00"),
            },
            {
                name: "Football - FBL14",
                startTime: new Date("2024-07-25T21:00"),
                endTime: new Date("2024-07-25T23:00"),
            },
            {
                name: "Football - FBL15",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T17:00"),
            },
            {
                name: "Football - FBL16",
                startTime: new Date("2024-07-27T15:00"),
                endTime: new Date("2024-07-27T17:00"),
            },
            {
                name: "Football - FBL17",
                startTime: new Date("2024-07-27T17:00"),
                endTime: new Date("2024-07-27T19:00"),
            },
            {
                name: "Football - FBL18",
                startTime: new Date("2024-07-27T17:00"),
                endTime: new Date("2024-07-27T19:00"),
            },
            {
                name: "Football - FBL19",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T21:00"),
            },
            {
                name: "Football - FBL20",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T21:00"),
            },
            {
                name: "Football - FBL21",
                startTime: new Date("2024-07-27T21:00"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "Football - FBL22",
                startTime: new Date("2024-07-27T21:00"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "Football - FBL23",
                startTime: new Date("2024-07-28T17:00"),
                endTime: new Date("2024-07-28T19:00"),
            },
            {
                name: "Football - FBL24",
                startTime: new Date("2024-07-28T17:00"),
                endTime: new Date("2024-07-28T19:00"),
            },
            {
                name: "Football - FBL25",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T21:00"),
            },
            {
                name: "Football - FBL26",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T21:00"),
            },
            {
                name: "Football - FBL27",
                startTime: new Date("2024-07-28T21:00"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "Football - FBL28",
                startTime: new Date("2024-07-28T21:00"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "Football - FBL29",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T17:00"),
            },
            {
                name: "Football - FBL30",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T17:00"),
            },
            {
                name: "Football - FBL31",
                startTime: new Date("2024-07-30T17:00"),
                endTime: new Date("2024-07-30T19:00"),
            },
            {
                name: "Football - FBL32",
                startTime: new Date("2024-07-30T17:00"),
                endTime: new Date("2024-07-30T19:00"),
            },
            {
                name: "Football - FBL33",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T21:00"),
            },
            {
                name: "Football - FBL34",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T21:00"),
            },
            {
                name: "Football - FBL35",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Football - FBL36",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "Football - FBL37",
                startTime: new Date("2024-07-31T17:00"),
                endTime: new Date("2024-07-31T19:00"),
            },
            {
                name: "Football - FBL38",
                startTime: new Date("2024-07-31T17:00"),
                endTime: new Date("2024-07-31T19:00"),
            },
            {
                name: "Football - FBL39",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T21:00"),
            },
            {
                name: "Football - FBL40",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T21:00"),
            },
            {
                name: "Football - FBL41",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Football - FBL42",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "Football - FBL43",
                startTime: new Date("2024-08-02T15:00"),
                endTime: new Date("2024-08-02T18:00"),
            },
            {
                name: "Football - FBL44",
                startTime: new Date("2024-08-02T17:00"),
                endTime: new Date("2024-08-02T20:00"),
            },
            {
                name: "Football - FBL45",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:00"),
            },
            {
                name: "Football - FBL46",
                startTime: new Date("2024-08-02T21:00"),
                endTime: new Date("2024-08-02T23:59"),
            },
            {
                name: "Football - FBL47",
                startTime: new Date("2024-08-03T15:00"),
                endTime: new Date("2024-08-03T18:00"),
            },
            {
                name: "Football - FBL48",
                startTime: new Date("2024-08-03T17:00"),
                endTime: new Date("2024-08-03T20:00"),
            },
            {
                name: "Football - FBL49",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:00"),
            },
            {
                name: "Football - FBL50",
                startTime: new Date("2024-08-03T21:00"),
                endTime: new Date("2024-08-03T23:59"),
            },
            {
                name: "Football - FBL51",
                startTime: new Date("2024-08-05T18:00"),
                endTime: new Date("2024-08-05T21:00"),
            },
            {
                name: "Football - FBL52",
                startTime: new Date("2024-08-05T21:00"),
                endTime: new Date("2024-08-05T23:59"),
            },
            {
                name: "Football - FBL53",
                startTime: new Date("2024-08-06T18:00"),
                endTime: new Date("2024-08-06T21:00"),
            },
            {
                name: "Football - FBL54",
                startTime: new Date("2024-08-06T21:00"),
                endTime: new Date("2024-08-06T23:59"),
            },
            {
                name: "Football - FBL55",
                startTime: new Date("2024-08-08T17:00"),
                endTime: new Date("2024-08-08T20:00"),
            },
            {
                name: "Football - FBL56",
                startTime: new Date("2024-08-09T15:00"),
                endTime: new Date("2024-08-09T18:00"),
            },
            {
                name: "Football - FBL57",
                startTime: new Date("2024-08-09T18:00"),
                endTime: new Date("2024-08-09T21:30"),
            },
            {
                name: "Football - FBL58",
                startTime: new Date("2024-08-10T17:00"),
                endTime: new Date("2024-08-10T20:30"),
            }]
    },
    {
        id: 17,
        name: "Water polo",
        selected: false,
        sessions: [
            {
                name: "Water polo - WPO01",
                startTime: new Date("2024-07-30T19:30"),
                endTime: new Date("2024-07-30T22:30"),
            },
            {
                name: "Water polo - WPO02",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T18:00"),
            },
            {
                name: "Water polo - WPO03",
                startTime: new Date("2024-07-30T10:30"),
                endTime: new Date("2024-07-30T13:30"),
            },
            {
                name: "Water polo - WPO04",
                startTime: new Date("2024-07-29T18:30"),
                endTime: new Date("2024-07-29T21:30"),
            },
            {
                name: "Water polo - WPO05",
                startTime: new Date("2024-07-29T14:00"),
                endTime: new Date("2024-07-29T17:00"),
            },
            {
                name: "Water polo - WPO06",
                startTime: new Date("2024-07-28T19:30"),
                endTime: new Date("2024-07-28T22:30"),
            },
            {
                name: "Water polo - WPO07",
                startTime: new Date("2024-07-28T15:00"),
                endTime: new Date("2024-07-28T18:00"),
            },
            {
                name: "Water polo - WPO08",
                startTime: new Date("2024-07-28T10:30"),
                endTime: new Date("2024-07-28T13:30"),
            },
            {
                name: "Water polo - WPO09",
                startTime: new Date("2024-07-27T18:30"),
                endTime: new Date("2024-07-27T21:30"),
            },
            {
                name: "Water polo - WPO10",
                startTime: new Date("2024-07-27T14:00"),
                endTime: new Date("2024-07-27T17:00"),
            },
            {
                name: "Water polo - WPO11",
                startTime: new Date("2024-08-08T18:00"),
                endTime: new Date("2024-08-08T21:00"),
            },
            {
                name: "Water polo - WPO12",
                startTime: new Date("2024-08-08T13:00"),
                endTime: new Date("2024-08-08T16:00"),
            },
            {
                name: "Water polo - WPO13",
                startTime: new Date("2024-08-08T18:00"),
                endTime: new Date("2024-08-08T21:00"),
            },
            {
                name: "Water polo - WPO14",
                startTime: new Date("2024-08-07T19:00"),
                endTime: new Date("2024-08-07T22:00"),
            },
            {
                name: "Water polo - WPO15",
                startTime: new Date("2024-08-07T14:00"),
                endTime: new Date("2024-08-07T17:00"),
            },
            {
                name: "Water polo - WPO16",
                startTime: new Date("2024-08-06T19:00"),
                endTime: new Date("2024-08-06T22:00"),
            },
            {
                name: "Water polo - WPO17",
                startTime: new Date("2024-08-06T14:00"),
                endTime: new Date("2024-08-06T17:00"),
            },
            {
                name: "Water polo - WPO18",
                startTime: new Date("2024-08-05T18:30"),
                endTime: new Date("2024-08-05T23:00"),
            },
            {
                name: "Water polo - WPO19",
                startTime: new Date("2024-08-05T12:00"),
                endTime: new Date("2024-08-05T16:30"),
            },
            {
                name: "Water polo - WPO20",
                startTime: new Date("2024-08-04T18:30"),
                endTime: new Date("2024-08-04T21:30"),
            },
            {
                name: "Water polo - WPO21",
                startTime: new Date("2024-08-04T14:00"),
                endTime: new Date("2024-08-04T17:00"),
            },
            {
                name: "Water polo - WPO22",
                startTime: new Date("2024-07-30T15:00"),
                endTime: new Date("2024-07-30T18:00"),
            },
            {
                name: "Water polo - WPO23",
                startTime: new Date("2024-07-30T10:30"),
                endTime: new Date("2024-07-30T13:30"),
            },
            {
                name: "Water polo - WPO24",
                startTime: new Date("2024-07-29T18:30"),
                endTime: new Date("2024-07-29T21:30"),
            },
            {
                name: "Water polo - WPO25",
                startTime: new Date("2024-07-29T14:00"),
                endTime: new Date("2024-07-29T17:00"),
            },
            {
                name: "Water polo - WPO26",
                startTime: new Date("2024-08-11T14:00"),
                endTime: new Date("2024-08-11T15:50"),
            },
            {
                name: "Water polo - WPO27",
                startTime: new Date("2024-08-11T09:00"),
                endTime: new Date("2024-08-11T12:00"),
            },
            {
                name: "Water polo - WPO28",
                startTime: new Date("2024-08-10T14:00"),
                endTime: new Date("2024-08-10T21:00"),
            },
            {
                name: "Water polo - WPO29",
                startTime: new Date("2024-08-10T09:00"),
                endTime: new Date("2024-08-10T12:00"),
            },
            {
                name: "Water polo - WPO30",
                startTime: new Date("2024-08-09T18:00"),
                endTime: new Date("2024-08-09T21:00"),
            },
            {
                name: "Water polo - WPO31",
                startTime: new Date("2024-08-09T13:00"),
                endTime: new Date("2024-08-09T16:00"),
            }
        ]
    },
    {
        id: 18,
        name: "Weightlifting",
        selected: false,
        sessions: [
            {
                "name": "Weightlifting - WLF01",
                "startTime": new Date("2024-08-07T15:00"),
                "endTime": new Date("2024-08-07T17:30")
            },
            {
                "name": "Weightlifting - WLF01",
                "startTime": new Date("2024-08-07T19:30"),
                "endTime": new Date("2024-08-07T22:00")
            },
            {
                "name": "Weightlifting - WLF03",
                "startTime": new Date("2024-08-08T15:00"),
                "endTime": new Date("2024-08-08T17:30")
            },
            {
                "name": "Weightlifting - WLF03",
                "startTime": new Date("2024-08-08T19:30"),
                "endTime": new Date("2024-08-08T22:00")
            },
            {
                "name": "Weightlifting - WLF05",
                "startTime": new Date("2024-08-09T15:00"),
                "endTime": new Date("2024-08-09T17:30")
            },
            {
                "name": "Weightlifting - WLF05",
                "startTime": new Date("2024-08-09T19:30"),
                "endTime": new Date("2024-08-09T22:00")
            },
            {
                "name": "Weightlifting - WLF07",
                "startTime": new Date("2024-08-10T11:30"),
                "endTime": new Date("2024-08-10T14:00")
            },
            {
                "name": "Weightlifting - WLF07",
                "startTime": new Date("2024-08-10T16:00"),
                "endTime": new Date("2024-08-10T18:30")
            },
            {
                "name": "Weightlifting - WLF07",
                "startTime": new Date("2024-08-10T20:30"),
                "endTime": new Date("2024-08-10T23:00")
            },
            {
                "name": "Weightlifting - WLF06",
                "startTime": new Date("2024-08-11T11:30"),
                "endTime": new Date("2024-08-11T14:00")
            }
        ]
    },
    {
        id: 19,
        name: "Volleyball",
        selected: false,
        sessions: [
            {
                "name": "Volleyball - VVO01",
                "startTime": new Date("2024-07-27T09:00"),
                "endTime": new Date("2024-07-27T11:30")
            },
            {
                "name": "Volleyball - VVO02",
                "startTime": new Date("2024-07-27T13:00"),
                "endTime": new Date("2024-07-27T15:30")
            },
            {
                "name": "Volleyball - VVO03",
                "startTime": new Date("2024-07-27T17:00"),
                "endTime": new Date("2024-07-27T19:30")
            },
            {
                "name": "Volleyball - VVO04",
                "startTime": new Date("2024-07-27T21:00"),
                "endTime": new Date("2024-07-27T23:30")
            },
            {
                "name": "Volleyball - VVO05",
                "startTime": new Date("2024-07-28T09:00"),
                "endTime": new Date("2024-07-28T11:30")
            },
            {
                "name": "Volleyball - VVO06",
                "startTime": new Date("2024-07-28T13:00"),
                "endTime": new Date("2024-07-28T15:30")
            },
            {
                "name": "Volleyball - VVO07",
                "startTime": new Date("2024-07-28T17:00"),
                "endTime": new Date("2024-07-28T19:30")
            },
            {
                "name": "Volleyball - VVO08",
                "startTime": new Date("2024-07-28T21:00"),
                "endTime": new Date("2024-07-28T23:30")
            },
            {
                "name": "Volleyball - VVO09",
                "startTime": new Date("2024-07-29T09:00"),
                "endTime": new Date("2024-07-29T11:30")
            },
            {
                "name": "Volleyball - VVO10",
                "startTime": new Date("2024-07-29T13:00"),
                "endTime": new Date("2024-07-29T15:30")
            },
            {
                "name": "Volleyball - VVO11",
                "startTime": new Date("2024-07-29T17:00"),
                "endTime": new Date("2024-07-29T19:30")
            },
            {
                "name": "Volleyball - VVO12",
                "startTime": new Date("2024-07-29T21:00"),
                "endTime": new Date("2024-07-29T23:30")
            },
            {
                "name": "Volleyball - VVO13",
                "startTime": new Date("2024-07-30T09:00"),
                "endTime": new Date("2024-07-30T11:30")
            },
            {
                "name": "Volleyball - VVO14",
                "startTime": new Date("2024-07-30T13:00"),
                "endTime": new Date("2024-07-30T15:30")
            },
            {
                "name": "Volleyball - VVO15",
                "startTime": new Date("2024-07-30T17:00"),
                "endTime": new Date("2024-07-30T19:30")
            },
            {
                "name": "Volleyball - VVO16",
                "startTime": new Date("2024-07-31T09:00"),
                "endTime": new Date("2024-07-31T11:30")
            },
            {
                "name": "Volleyball - VVO17",
                "startTime": new Date("2024-07-31T13:00"),
                "endTime": new Date("2024-07-31T15:30")
            },
            {
                "name": "Volleyball - VVO18",
                "startTime": new Date("2024-07-31T17:00"),
                "endTime": new Date("2024-07-31T19:30")
            },
            {
                "name": "Volleyball - VVO19",
                "startTime": new Date("2024-07-31T21:00"),
                "endTime": new Date("2024-07-31T23:30")
            },
            {
                "name": "Volleyball - VVO20",
                "startTime": new Date("2024-08-01T09:00"),
                "endTime": new Date("2024-08-01T11:30")
            },
            {
                "name": "Volleyball - VVO21",
                "startTime": new Date("2024-08-01T13:00"),
                "endTime": new Date("2024-08-01T15:30")
            },
            {
                "name": "Volleyball - VVO22",
                "startTime": new Date("2024-08-01T17:00"),
                "endTime": new Date("2024-08-01T19:30")
            },
            {
                "name": "Volleyball - VVO23",
                "startTime": new Date("2024-08-01T21:00"),
                "endTime": new Date("2024-08-01T23:30")
            },
            {
                "name": "Volleyball - VVO24",
                "startTime": new Date("2024-08-02T09:00"),
                "endTime": new Date("2024-08-02T11:30")
            },
            {
                "name": "Volleyball - VVO25",
                "startTime": new Date("2024-08-02T13:00"),
                "endTime": new Date("2024-08-02T15:30")
            },
            {
                "name": "Volleyball - VVO26",
                "startTime": new Date("2024-08-02T17:00"),
                "endTime": new Date("2024-08-02T19:30")
            },
            {
                "name": "Volleyball - VVO27",
                "startTime": new Date("2024-08-02T21:00"),
                "endTime": new Date("2024-08-02T23:30")
            },
            {
                "name": "Volleyball - VVO28",
                "startTime": new Date("2024-08-03T09:00"),
                "endTime": new Date("2024-08-03T11:30")
            },
            {
                "name": "Volleyball - VVO29",
                "startTime": new Date("2024-08-03T13:00"),
                "endTime": new Date("2024-08-03T15:30")
            },
            {
                "name": "Volleyball - VVO30",
                "startTime": new Date("2024-08-03T17:00"),
                "endTime": new Date("2024-08-03T19:30")
            },
            {
                "name": "Volleyball - VVO31",
                "startTime": new Date("2024-08-04T09:00"),
                "endTime": new Date("2024-08-04T11:30")
            },
            {
                "name": "Volleyball - VVO32",
                "startTime": new Date("2024-08-04T13:00"),
                "endTime": new Date("2024-08-04T15:30")
            },
            {
                "name": "Volleyball - VVO33",
                "startTime": new Date("2024-08-04T17:00"),
                "endTime": new Date("2024-08-04T19:30")
            },
            {
                "name": "Volleyball - VVO34",
                "startTime": new Date("2024-08-04T21:00"),
                "endTime": new Date("2024-08-04T23:30")
            },
            {
                "name": "Volleyball - VVO35",
                "startTime": new Date("2024-08-05T09:00"),
                "endTime": new Date("2024-08-05T11:30")
            },
            {
                "name": "Volleyball - VVO36",
                "startTime": new Date("2024-08-05T13:00"),
                "endTime": new Date("2024-08-05T15:30")
            },
            {
                "name": "Volleyball - VVO37",
                "startTime": new Date("2024-08-05T17:00"),
                "endTime": new Date("2024-08-05T19:30")
            },
            {
                "name": "Volleyball - VVO38",
                "startTime": new Date("2024-08-05T21:00"),
                "endTime": new Date("2024-08-05T23:30")
            },
            {
                "name": "Volleyball - VVO39",
                "startTime": new Date("2024-08-06T09:00"),
                "endTime": new Date("2024-08-06T11:30")
            },
            {
                "name": "Volleyball - VVO40",
                "startTime": new Date("2024-08-06T13:00"),
                "endTime": new Date("2024-08-06T15:30")
            },
            {
                "name": "Volleyball - VVO41",
                "startTime": new Date("2024-08-06T17:00"),
                "endTime": new Date("2024-08-06T19:30")
            },
            {
                "name": "Volleyball - VVO42",
                "startTime": new Date("2024-08-06T21:00"),
                "endTime": new Date("2024-08-06T23:30")
            },
            {
                "name": "Volleyball - VVO43",
                "startTime": new Date("2024-08-07T16:00"),
                "endTime": new Date("2024-08-07T18:30")
            },
            {
                "name": "Volleyball - VVO44",
                "startTime": new Date("2024-08-07T20:00"),
                "endTime": new Date("2024-08-07T22:30")
            },
            {
                "name": "Volleyball - VVO45",
                "startTime": new Date("2024-08-08T16:00"),
                "endTime": new Date("2024-08-08T18:30")
            },
            {
                "name": "Volleyball - VVO46",
                "startTime": new Date("2024-08-08T20:00"),
                "endTime": new Date("2024-08-08T22:30")
            },
            {
                "name": "Volleyball - VVO47",
                "startTime": new Date("2024-08-09T16:00"),
                "endTime": new Date("2024-08-09T18:30")
            },
            {
                "name": "Volleyball - VVO48",
                "startTime": new Date("2024-08-09T20:00"),
                "endTime": new Date("2024-08-09T22:30")
            }
        ]
    },
    {
        id: 20,
        name: "Beach volleyball",
        selected: false,
        sessions: [
            {
                "name": "Beach volleyball - VBV01",
                "startTime": new Date("2024-07-27T09:00"),
                "endTime": new Date("2024-07-27T11:00")
            },
            {
                "name": "Beach volleyball - VBV02",
                "startTime": new Date("2024-07-27T13:00"),
                "endTime": new Date("2024-07-27T15:00")
            },
            {
                "name": "Beach volleyball - VBV03",
                "startTime": new Date("2024-07-27T17:00"),
                "endTime": new Date("2024-07-27T19:00")
            },
            {
                "name": "Beach volleyball - VBV04",
                "startTime": new Date("2024-07-27T21:00"),
                "endTime": new Date("2024-07-27T23:00")
            },
            {
                "name": "Beach volleyball - VBV05",
                "startTime": new Date("2024-07-28T09:00"),
                "endTime": new Date("2024-07-28T13:00")
            },
            {
                "name": "Beach volleyball - VBV06",
                "startTime": new Date("2024-07-28T15:00"),
                "endTime": new Date("2024-07-28T18:00")
            },
            {
                "name": "Beach volleyball - VBV07",
                "startTime": new Date("2024-07-28T20:00"),
                "endTime": new Date("2024-07-28T23:00")
            },
            {
                "name": "Beach volleyball - VBV08",
                "startTime": new Date("2024-07-29T09:00"),
                "endTime": new Date("2024-07-29T13:00")
            },
            {
                "name": "Beach volleyball - VBV09",
                "startTime": new Date("2024-07-29T15:00"),
                "endTime": new Date("2024-07-29T18:00")
            },
            {
                "name": "Beach volleyball - VBV10",
                "startTime": new Date("2024-07-29T20:00"),
                "endTime": new Date("2024-07-29T23:00")
            },
            {
                "name": "Beach volleyball - VBV11",
                "startTime": new Date("2024-07-30T09:00"),
                "endTime": new Date("2024-07-30T13:00")
            },
            {
                "name": "Beach volleyball - VBV12",
                "startTime": new Date("2024-07-30T15:00"),
                "endTime": new Date("2024-07-30T18:00")
            },
            {
                "name": "Beach volleyball - VBV13",
                "startTime": new Date("2024-07-30T20:00"),
                "endTime": new Date("2024-07-30T23:00")
            },
            {
                "name": "Beach volleyball - VBV14",
                "startTime": new Date("2024-07-31T09:00"),
                "endTime": new Date("2024-07-31T13:00")
            },
            {
                "name": "Beach volleyball - VBV15",
                "startTime": new Date("2024-07-31T15:00"),
                "endTime": new Date("2024-07-31T18:00")
            },
            {
                "name": "Beach volleyball - VBV16",
                "startTime": new Date("2024-07-31T20:00"),
                "endTime": new Date("2024-07-31T23:00")
            },
            {
                "name": "Beach volleyball - VBV17",
                "startTime": new Date("2024-08-01T09:00"),
                "endTime": new Date("2024-08-01T13:00")
            },
            {
                "name": "Beach volleyball - VBV18",
                "startTime": new Date("2024-08-01T15:00"),
                "endTime": new Date("2024-08-01T18:00")
            },
            {
                "name": "Beach volleyball - VBV19",
                "startTime": new Date("2024-08-01T20:00"),
                "endTime": new Date("2024-08-01T23:00")
            },
            {
                "name": "Beach volleyball - VBV20",
                "startTime": new Date("2024-08-02T09:00"),
                "endTime": new Date("2024-08-02T13:00")
            },
            {
                "name": "Beach volleyball - VBV21",
                "startTime": new Date("2024-08-02T15:00"),
                "endTime": new Date("2024-08-02T18:00")
            },
            {
                "name": "Beach volleyball - VBV22",
                "startTime": new Date("2024-08-02T20:00"),
                "endTime": new Date("2024-08-02T23:00")
            },
            {
                "name": "Beach volleyball - VBV23",
                "startTime": new Date("2024-08-03T09:00"),
                "endTime": new Date("2024-08-03T11:00")
            },
            {
                "name": "Beach volleyball - VBV24",
                "startTime": new Date("2024-08-03T13:00"),
                "endTime": new Date("2024-08-03T15:00")
            },
            {
                "name": "Beach volleyball - VBV25",
                "startTime": new Date("2024-08-03T17:00"),
                "endTime": new Date("2024-08-03T19:00")
            },
            {
                "name": "Beach volleyball - VBV26",
                "startTime": new Date("2024-08-03T21:00"),
                "endTime": new Date("2024-08-03T23:00")
            },
            {
                "name": "Beach volleyball - VBV27",
                "startTime": new Date("2024-08-04T09:00"),
                "endTime": new Date("2024-08-04T11:00")
            },
            {
                "name": "Beach volleyball - VBV28",
                "startTime": new Date("2024-08-04T13:00"),
                "endTime": new Date("2024-08-04T15:00")
            },
            {
                "name": "Beach volleyball - VBV29",
                "startTime": new Date("2024-08-04T17:00"),
                "endTime": new Date("2024-08-04T19:00")
            },
            {
                "name": "Beach volleyball - VBV30",
                "startTime": new Date("2024-08-04T21:00"),
                "endTime": new Date("2024-08-04T23:00")
            },
            {
                "name": "Beach volleyball - VBV31",
                "startTime": new Date("2024-08-05T09:00"),
                "endTime": new Date("2024-08-05T11:00")
            },
            {
                "name": "Beach volleyball - VBV32",
                "startTime": new Date("2024-08-05T13:00"),
                "endTime": new Date("2024-08-05T15:00")
            },
            {
                "name": "Beach volleyball - VBV33",
                "startTime": new Date("2024-08-05T17:00"),
                "endTime": new Date("2024-08-05T19:00")
            },
            {
                "name": "Beach volleyball - VBV34",
                "startTime": new Date("2024-08-05T21:00"),
                "endTime": new Date("2024-08-05T23:00")
            },
            {
                "name": "Beach volleyball - VBV35",
                "startTime": new Date("2024-08-06T17:00"),
                "endTime": new Date("2024-08-06T19:00")
            },
            {
                "name": "Beach volleyball - VBV36",
                "startTime": new Date("2024-08-06T21:00"),
                "endTime": new Date("2024-08-06T23:00")
            },
            {
                "name": "Beach volleyball - VBV37",
                "startTime": new Date("2024-08-06T20:00"),
                "endTime": new Date("2024-08-06T23:00")
            },
            {
                "name": "Beach volleyball - VBV38",
                "startTime": new Date("2024-08-07T17:00"),
                "endTime": new Date("2024-08-07T19:00")
            },
            {
                "name": "Beach volleyball - VBV39",
                "startTime": new Date("2024-08-07T21:00"),
                "endTime": new Date("2024-08-07T23:00")
            },
            {
                "name": "Beach volleyball - VBV40",
                "startTime": new Date("2024-08-08T17:00"),
                "endTime": new Date("2024-08-08T19:00")
            },
            {
                "name": "Beach volleyball - VBV41",
                "startTime": new Date("2024-08-08T21:00"),
                "endTime": new Date("2024-08-08T23:00")
            },
            {
                "name": "Beach volleyball - VBV42",
                "startTime": new Date("2024-08-09T21:00"),
                "endTime": new Date("2024-08-10T00:00")
            },
            {
                "name": "Beach volleyball - VBV43",
                "startTime": new Date("2024-08-10T21:00"),
                "endTime": new Date("2024-08-11T00:00")
            }
        ]
    },
    {
        id: 21,
        name: "Table tennis",
        selected: false,
        sessions: [
            {
                "name": "Table tennis - TTE01",
                "startTime": new Date("2024-07-27T15:00"),
                "endTime": new Date("2024-07-27T18:00")
            },
            {
                "name": "Table tennis - TTE02",
                "startTime": new Date("2024-07-27T20:00"),
                "endTime": new Date("2024-07-27T23:00")
            },
            {
                "name": "Table tennis - TTE03",
                "startTime": new Date("2024-07-28T10:00"),
                "endTime": new Date("2024-07-28T14:00")
            },
            {
                "name": "Table tennis - TTE04",
                "startTime": new Date("2024-07-28T16:00"),
                "endTime": new Date("2024-07-28T18:00")
            },
            {
                "name": "Table tennis - TTE05",
                "startTime": new Date("2024-07-28T20:00"),
                "endTime": new Date("2024-07-28T23:00")
            },
            {
                "name": "Table tennis - TTE06",
                "startTime": new Date("2024-07-29T10:00"),
                "endTime": new Date("2024-07-29T14:00")
            },
            {
                "name": "Table tennis - TTE07",
                "startTime": new Date("2024-07-29T16:00"),
                "endTime": new Date("2024-07-29T18:00")
            },
            {
                "name": "Table tennis - TTE08",
                "startTime": new Date("2024-07-29T20:00"),
                "endTime": new Date("2024-07-29T23:00")
            },
            {
                "name": "Table tennis - TTE09",
                "startTime": new Date("2024-07-30T10:00"),
                "endTime": new Date("2024-07-30T12:00")
            },
            {
                "name": "Table tennis - TTE10",
                "startTime": new Date("2024-07-30T13:30"),
                "endTime": new Date("2024-07-30T16:00")
            },
            {
                "name": "Table tennis - TTE11",
                "startTime": new Date("2024-07-30T13:30"),
                "endTime": new Date("2024-07-30T16:00")
            },
            {
                "name": "Table tennis - TTE12",
                "startTime": new Date("2024-07-31T10:00"),
                "endTime": new Date("2024-07-31T13:00")
            },
            {
                "name": "Table tennis - TTE13",
                "startTime": new Date("2024-07-31T15:00"),
                "endTime": new Date("2024-07-31T18:00")
            },
            {
                "name": "Table tennis - TTE14",
                "startTime": new Date("2024-07-31T20:00"),
                "endTime": new Date("2024-07-31T23:00")
            },
            {
                "name": "Table tennis - TTE15",
                "startTime": new Date("2024-08-01T10:00"),
                "endTime": new Date("2024-08-01T13:00")
            },
            {
                "name": "Table tennis - TTE16",
                "startTime": new Date("2024-08-01T10:00"),
                "endTime": new Date("2024-08-01T13:00")
            },
            {
                "name": "Table tennis - TTE17",
                "startTime": new Date("2024-08-01T15:00"),
                "endTime": new Date("2024-08-01T18:00")
            },
            {
                "name": "Table tennis - TTE18",
                "startTime": new Date("2024-08-01T15:00"),
                "endTime": new Date("2024-08-01T18:00")
            },
            {
                "name": "Table tennis - TTE19",
                "startTime": new Date("2024-08-02T10:00"),
                "endTime": new Date("2024-08-02T13:00")
            },
            {
                "name": "Table tennis - TTE20",
                "startTime": new Date("2024-08-02T10:00"),
                "endTime": new Date("2024-08-02T13:00")
            },
            {
                "name": "Table tennis - TTE21",
                "startTime": new Date("2024-08-02T15:00"),
                "endTime": new Date("2024-08-02T18:00")
            },
            {
                "name": "Table tennis - TTE22",
                "startTime": new Date("2024-08-02T15:00"),
                "endTime": new Date("2024-08-02T18:00")
            },
            {
                "name": "Table tennis - TTE23",
                "startTime": new Date("2024-08-03T13:30"),
                "endTime": new Date("2024-08-03T16:00")
            },
            {
                "name": "Table tennis - TTE24",
                "startTime": new Date("2024-08-04T13:30"),
                "endTime": new Date("2024-08-04T16:00")
            },
            {
                "name": "Table tennis - TTE25",
                "startTime": new Date("2024-08-04T13:30"),
                "endTime": new Date("2024-08-04T16:00")
            },
            {
                "name": "Table tennis - TTE26",
                "startTime": new Date("2024-08-05T10:00"),
                "endTime": new Date("2024-08-05T13:00")
            },
            {
                "name": "Table tennis - TTE27",
                "startTime": new Date("2024-08-05T15:00"),
                "endTime": new Date("2024-08-05T18:00")
            },
            {
                "name": "Table tennis - TTE28",
                "startTime": new Date("2024-08-05T20:00"),
                "endTime": new Date("2024-08-05T23:00")
            },
            {
                "name": "Table tennis - TTE29",
                "startTime": new Date("2024-08-06T10:00"),
                "endTime": new Date("2024-08-06T13:00")
            },
            {
                "name": "Table tennis - TTE30",
                "startTime": new Date("2024-08-06T15:00"),
                "endTime": new Date("2024-08-06T18:00")
            },
            {
                "name": "Table tennis - TTE31",
                "startTime": new Date("2024-08-06T20:00"),
                "endTime": new Date("2024-08-06T23:00")
            },
            {
                "name": "Table tennis - TTE32",
                "startTime": new Date("2024-08-07T10:00"),
                "endTime": new Date("2024-08-07T13:00")
            },
            {
                "name": "Table tennis - TTE33",
                "startTime": new Date("2024-08-07T15:00"),
                "endTime": new Date("2024-08-07T18:00")
            },
            {
                "name": "Table tennis - TTE34",
                "startTime": new Date("2024-08-07T20:00"),
                "endTime": new Date("2024-08-07T23:00")
            },
            {
                "name": "Table tennis - TTE35",
                "startTime": new Date("2024-08-08T10:00"),
                "endTime": new Date("2024-08-08T13:00")
            },
            {
                "name": "Table tennis - TTE36",
                "startTime": new Date("2024-08-08T15:00"),
                "endTime": new Date("2024-08-08T18:30")
            },
            {
                "name": "Table tennis - TTE37",
                "startTime": new Date("2024-08-08T15:00"),
                "endTime": new Date("2024-08-08T18:30")
            },
            {
                "name": "Table tennis - TTE38",
                "startTime": new Date("2024-08-09T10:00"),
                "endTime": new Date("2024-08-09T13:00")
            },
            {
                "name": "Table tennis - TTE39",
                "startTime": new Date("2024-08-09T15:00"),
                "endTime": new Date("2024-08-09T18:30")
            },
            {
                "name": "Table tennis - TTE40",
                "startTime": new Date("2024-08-09T15:00"),
                "endTime": new Date("2024-08-09T18:30")
            },
            {
                "name": "Table tennis - TTE41",
                "startTime": new Date("2024-08-09T15:00"),
                "endTime": new Date("2024-08-09T18:30")
            },
            {
                "name": "Table tennis - TTE42",
                "startTime": new Date("2024-08-10T10:00"),
                "endTime": new Date("2024-08-10T13:00")
            },
            {
                "name": "Table tennis - TTE43",
                "startTime": new Date("2024-08-10T15:00"),
                "endTime": new Date("2024-08-10T18:30")
            }
        ]
    },
    {
        id: 22,
        name: "Triathlon",
        selected: false,
        sessions: [
            {
                "name": "Triathlon - TRI01",
                "startTime": new Date("2024-07-30T08:00"),
                "endTime": new Date("2024-07-30T10:30")
            },
            {
                "name": "Triathlon - TRI02",
                "startTime": new Date("2024-07-31T08:00"),
                "endTime": new Date("2024-07-31T10:40")
            },
            {
                "name": "Triathlon - TRI03",
                "startTime": new Date("2024-08-05T08:00"),
                "endTime": new Date("2024-08-05T10:10")
            }
        ]
    },
    {
        id: 23,
        name: "Taekwondo",
        selected: false,
        sessions: [
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
        name: "Tennis",
        selected: false,
        sessions: [
            {
                "name": "Tennis - TEN01",
                "startTime": new Date("2024-07-27T12:00"),
                "endTime": new Date("2024-07-27T17:00")
            },
            {
                "name": "Tennis - TEN02",
                "startTime": new Date("2024-07-27T12:00"),
                "endTime": new Date("2024-07-27T19:00")
            },
            {
                "name": "Tennis - TEN03",
                "startTime": new Date("2024-07-27T12:00"),
                "endTime": new Date("2024-07-27T19:00")
            },
            {
                "name": "Tennis - TEN04",
                "startTime": new Date("2024-07-27T12:00"),
                "endTime": new Date("2024-07-27T19:00")
            },
            {
                "name": "Tennis - TEN05",
                "startTime": new Date("2024-07-27T19:00"),
                "endTime": new Date("2024-07-27T23:00")
            },
            {
                "name": "Tennis - TEN06",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T17:00")
            },
            {
                "name": "Tennis - TEN07",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Tennis - TEN08",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Tennis - TEN09",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Tennis - TEN10",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Tennis - TEN11",
                "startTime": new Date("2024-07-29T19:00"),
                "endTime": new Date("2024-07-29T23:00")
            },
            {
                "name": "Tennis - TEN12",
                "startTime": new Date("2024-07-29T12:00"),
                "endTime": new Date("2024-07-29T17:00")
            },
            {
                "name": "Tennis - TEN13",
                "startTime": new Date("2024-07-29T12:00"),
                "endTime": new Date("2024-07-29T19:00")
            },
            {
                "name": "Tennis - TEN14",
                "startTime": new Date("2024-07-29T12:00"),
                "endTime": new Date("2024-07-29T19:00")
            },
            {
                "name": "Tennis - TEN15",
                "startTime": new Date("2024-07-29T19:00"),
                "endTime": new Date("2024-07-29T23:00")
            },
            {
                "name": "Tennis - TEN16",
                "startTime": new Date("2024-07-30T12:00"),
                "endTime": new Date("2024-07-30T17:00")
            },
            {
                "name": "Tennis - TEN17",
                "startTime": new Date("2024-07-30T12:00"),
                "endTime": new Date("2024-07-30T19:00")
            },
            {
                "name": "Tennis - TEN18",
                "startTime": new Date("2024-07-30T12:00"),
                "endTime": new Date("2024-07-30T19:00")
            },
            {
                "name": "Tennis - TEN19",
                "startTime": new Date("2024-07-30T19:00"),
                "endTime": new Date("2024-07-30T23:00")
            },
            {
                "name": "Tennis - TEN20",
                "startTime": new Date("2024-07-30T12:00"),
                "endTime": new Date("2024-07-30T17:00")
            },
            {
                "name": "Tennis - TEN21",
                "startTime": new Date("2024-07-31T12:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Tennis - TEN22",
                "startTime": new Date("2024-07-31T12:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Tennis - TEN23",
                "startTime": new Date("2024-07-31T12:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Tennis - TEN24",
                "startTime": new Date("2024-07-31T12:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Tennis - TEN25",
                "startTime": new Date("2024-07-31T12:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Tennis - TEN26",
                "startTime": new Date("2024-08-01T12:00"),
                "endTime": new Date("2024-08-01T19:00")
            },
            {
                "name": "Tennis - TEN27",
                "startTime": new Date("2024-08-01T19:00"),
                "endTime": new Date("2024-08-01T23:00")
            },
            {
                "name": "Tennis - TEN28",
                "startTime": new Date("2024-08-01T12:00"),
                "endTime": new Date("2024-08-01T17:00")
            },
            {
                "name": "Tennis - TEN29",
                "startTime": new Date("2024-08-01T12:00"),
                "endTime": new Date("2024-08-01T19:00")
            },
            {
                "name": "Tennis - TEN30",
                "startTime": new Date("2024-08-02T12:00"),
                "endTime": new Date("2024-08-02T19:00")
            },
            {
                "name": "Tennis - TEN31",
                "startTime": new Date("2024-08-02T12:00"),
                "endTime": new Date("2024-08-02T19:00")
            },
            {
                "name": "Tennis - TEN32",
                "startTime": new Date("2024-08-02T12:00"),
                "endTime": new Date("2024-08-02T19:00")
            },
            {
                "name": "Tennis - TEN33",
                "startTime": new Date("2024-08-03T12:00"),
                "endTime": new Date("2024-08-03T19:00")
            },
            {
                "name": "Tennis - TEN34",
                "startTime": new Date("2024-08-04T12:00"),
                "endTime": new Date("2024-08-04T19:00")
            }
        ]
    },
    {
        id: 25,
        name: "Swimming",
        selected: false,
        sessions: [
            {
                "name": "Swimming - SWM01",
                "startTime": new Date("2024-07-27T11:00"),
                "endTime": new Date("2024-07-27T13:00")
            },
            {
                "name": "Swimming - SWM02",
                "startTime": new Date("2024-07-27T20:30"),
                "endTime": new Date("2024-07-27T22:30")
            },
            {
                "name": "Swimming - SWM03",
                "startTime": new Date("2024-07-28T11:00"),
                "endTime": new Date("2024-07-28T13:00")
            },
            {
                "name": "Swimming - SWM04",
                "startTime": new Date("2024-07-28T20:30"),
                "endTime": new Date("2024-07-28T22:30")
            },
            {
                "name": "Swimming - SWM05",
                "startTime": new Date("2024-07-29T11:00"),
                "endTime": new Date("2024-07-29T13:00")
            },
            {
                "name": "Swimming - SWM06",
                "startTime": new Date("2024-07-29T20:30"),
                "endTime": new Date("2024-07-29T22:30")
            },
            {
                "name": "Swimming - SWM07",
                "startTime": new Date("2024-07-30T11:00"),
                "endTime": new Date("2024-07-30T13:00")
            },
            {
                "name": "Swimming - SWM08",
                "startTime": new Date("2024-07-30T20:30"),
                "endTime": new Date("2024-07-30T22:30")
            },
            {
                "name": "Swimming - SWM09",
                "startTime": new Date("2024-07-31T11:00"),
                "endTime": new Date("2024-07-31T13:00")
            },
            {
                "name": "Swimming - SWM10",
                "startTime": new Date("2024-07-31T20:30"),
                "endTime": new Date("2024-07-31T22:30")
            },
            {
                "name": "Swimming - SWM11",
                "startTime": new Date("2024-08-01T11:00"),
                "endTime": new Date("2024-08-01T13:00")
            },
            {
                "name": "Swimming - SWM12",
                "startTime": new Date("2024-08-01T20:30"),
                "endTime": new Date("2024-08-01T22:30")
            },
            {
                "name": "Swimming - SWM13",
                "startTime": new Date("2024-08-02T11:00"),
                "endTime": new Date("2024-08-02T13:00")
            },
            {
                "name": "Swimming - SWM14",
                "startTime": new Date("2024-08-02T20:30"),
                "endTime": new Date("2024-08-02T22:30")
            },
            {
                "name": "Swimming - SWM15",
                "startTime": new Date("2024-08-03T11:00"),
                "endTime": new Date("2024-08-03T13:00")
            },
            {
                "name": "Swimming - SWM16",
                "startTime": new Date("2024-08-03T20:30"),
                "endTime": new Date("2024-08-03T22:30")
            },
            {
                "name": "Swimming - SWM17",
                "startTime": new Date("2024-08-04T18:30"),
                "endTime": new Date("2024-08-04T20:30")
            }
        ]
    },
    {
        id: 26,
        name: "Artistic swimming",
        selected: false,
        sessions: [
            {
                "name": "Artistic swimming - SWA01",
                "startTime": new Date("2024-08-05T19:30"),
                "endTime": new Date("2024-08-05T21:00")
            },
            {
                "name": "Artistic swimming - SWA02",
                "startTime": new Date("2024-08-06T19:30"),
                "endTime": new Date("2024-08-06T21:00")
            },
            {
                "name": "Artistic swimming - SWA03",
                "startTime": new Date("2024-08-07T19:30"),
                "endTime": new Date("2024-08-07T21:15")
            },
            {
                "name": "Artistic swimming - SWA04",
                "startTime": new Date("2024-08-09T19:30"),
                "endTime": new Date("2024-08-09T21:30")
            },
            {
                "name": "Artistic swimming - SWA05",
                "startTime": new Date("2024-08-10T19:30"),
                "endTime": new Date("2024-08-10T22:00")
            }
        ]
    },
    {
        id: 27,
        name: "Surfing",
        selected: false,
        sessions: [
            {
                "name": "Surfing - SRF01",
                "startTime": new Date("2024-07-27T07:00"),
                "endTime": new Date("2024-07-27T16:30")
            },
            {
                "name": "Surfing - SRF02",
                "startTime": new Date("2024-07-28T07:00"),
                "endTime": new Date("2024-07-28T16:30")
            },
            {
                "name": "Surfing - SRF03",
                "startTime": new Date("2024-07-29T07:00"),
                "endTime": new Date("2024-07-29T16:30")
            },
            {
                "name": "Surfing - SRF04",
                "startTime": new Date("2024-07-30T07:00"),
                "endTime": new Date("2024-07-30T16:50")
            }
        ]
    },
    {
        id: 28,
        name: "Skateboard",
        selected: false,
        sessions: [
            {
                "name": "Skateboard - SKB01",
                "startTime": new Date("2024-07-27T12:00"),
                "endTime": new Date("2024-07-27T15:30")
            },
            {
                "name": "Skateboard - SKB02",
                "startTime": new Date("2024-07-27T17:00"),
                "endTime": new Date("2024-07-27T19:00")
            },
            {
                "name": "Skateboard - SKB03",
                "startTime": new Date("2024-07-28T12:00"),
                "endTime": new Date("2024-07-28T15:30")
            },
            {
                "name": "Skateboard - SKB04",
                "startTime": new Date("2024-07-28T17:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Skateboard - SKB05",
                "startTime": new Date("2024-08-06T12:30"),
                "endTime": new Date("2024-08-06T16:00")
            },
            {
                "name": "Skateboard - SKB06",
                "startTime": new Date("2024-08-06T17:30"),
                "endTime": new Date("2024-08-06T19:00")
            },
            {
                "name": "Skateboard - SKB07",
                "startTime": new Date("2024-08-07T12:30"),
                "endTime": new Date("2024-08-07T16:00")
            },
            {
                "name": "Skateboard - SKB08",
                "startTime": new Date("2024-08-07T17:30"),
                "endTime": new Date("2024-08-07T19:00")
            }
        ]
    },
    {
        id: 29,
        name: "Shooting",
        selected: false,
        sessions: [
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
        name: "Sailing",
        selected: false,
        sessions: [
            {
                "name": "Sailing - SAL01",
                "startTime": new Date("2024-07-28T11:00"),
                "endTime": new Date("2024-07-28T19:00")
            },
            {
                "name": "Sailing - SAL02",
                "startTime": new Date("2024-07-29T11:00"),
                "endTime": new Date("2024-07-29T19:00")
            },
            {
                "name": "Sailing - SAL03",
                "startTime": new Date("2024-07-30T11:00"),
                "endTime": new Date("2024-07-30T19:00")
            },
            {
                "name": "Sailing - SAL04",
                "startTime": new Date("2024-07-31T11:00"),
                "endTime": new Date("2024-07-31T19:00")
            },
            {
                "name": "Sailing - SAL05",
                "startTime": new Date("2024-08-01T11:00"),
                "endTime": new Date("2024-08-01T19:00")
            },
            {
                "name": "Sailing - SAL06",
                "startTime": new Date("2024-08-02T11:00"),
                "endTime": new Date("2024-08-02T19:00")
            },
            {
                "name": "Sailing - SAL07",
                "startTime": new Date("2024-08-03T11:00"),
                "endTime": new Date("2024-08-03T19:00")
            },
            {
                "name": "Sailing - SAL08",
                "startTime": new Date("2024-08-04T11:00"),
                "endTime": new Date("2024-08-04T19:00")
            },
            {
                "name": "Sailing - SAL09",
                "startTime": new Date("2024-08-05T11:00"),
                "endTime": new Date("2024-08-05T19:00")
            },
            {
                "name": "Sailing - SAL10",
                "startTime": new Date("2024-08-06T11:00"),
                "endTime": new Date("2024-08-06T19:00")
            },
            {
                "name": "Sailing - SAL11",
                "startTime": new Date("2024-08-07T11:00"),
                "endTime": new Date("2024-08-07T19:00")
            },
            {
                "name": "Sailing - SAL12",
                "startTime": new Date("2024-08-08T11:00"),
                "endTime": new Date("2024-08-08T19:00")
            }
        ]
    },
    {
        id: 31,
        name: "Rugby sevens",
        selected: false,
        sessions: [
            {
                "name": "Rugby sevens - RUG01",
                "startTime": new Date("2024-07-24T14:00"),
                "endTime": new Date("2024-07-24T17:00")
            },
            {
                "name": "Rugby sevens - RUG02",
                "startTime": new Date("2024-07-25T14:00"),
                "endTime": new Date("2024-07-25T17:00")
            },
            {
                "name": "Rugby sevens - RUG03",
                "startTime": new Date("2024-07-25T14:30"),
                "endTime": new Date("2024-07-25T20:45")
            },
            {
                "name": "Rugby sevens - RUG04",
                "startTime": new Date("2024-07-27T14:00"),
                "endTime": new Date("2024-07-27T17:00")
            },
            {
                "name": "Rugby sevens - RUG05",
                "startTime": new Date("2024-07-28T20:00"),
                "endTime": new Date("2024-07-28T23:00")
            },
            {
                "name": "Rugby sevens - RUG06",
                "startTime": new Date("2024-07-29T20:00"),
                "endTime": new Date("2024-07-29T23:00")
            },
            {
                "name": "Rugby sevens - RUG07",
                "startTime": new Date("2024-07-29T15:30"),
                "endTime": new Date("2024-07-29T22:00")
            },
            {
                "name": "Rugby sevens - RUG08",
                "startTime": new Date("2024-07-30T15:30"),
                "endTime": new Date("2024-07-30T22:00")
            }
        ]
    },
    {
        id: 32,
        name: "Rowing",
        selected: false,
        sessions: [
            {
                "name": "Rowing - ROW01",
                "startTime": new Date("2024-07-28T09:00"),
                "endTime": new Date("2024-07-28T13:10")
            },
            {
                "name": "Rowing - ROW02",
                "startTime": new Date("2024-07-29T09:00"),
                "endTime": new Date("2024-07-29T13:10")
            },
            {
                "name": "Rowing - ROW03",
                "startTime": new Date("2024-07-30T09:30"),
                "endTime": new Date("2024-07-30T12:20")
            },
            {
                "name": "Rowing - ROW04",
                "startTime": new Date("2024-07-31T09:30"),
                "endTime": new Date("2024-07-31T11:50")
            },
            {
                "name": "Rowing - ROW05",
                "startTime": new Date("2024-08-01T09:30"),
                "endTime": new Date("2024-08-01T11:50")
            },
            {
                "name": "Rowing - ROW06",
                "startTime": new Date("2024-08-01T09:30"),
                "endTime": new Date("2024-08-01T12:40")
            },
            {
                "name": "Rowing - ROW07",
                "startTime": new Date("2024-08-02T09:30"),
                "endTime": new Date("2024-08-02T12:50")
            },
            {
                "name": "Rowing - ROW08",
                "startTime": new Date("2024-08-03T09:30"),
                "endTime": new Date("2024-08-03T11:40")
            }
        ]
    },
    {
        id: 33,
        name: "Marathon Swimming",
        selected: false,
        sessions: [
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
        sessions: [
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
        name: "Modern pentathlon",
        selected: false,
        sessions: [
            {
                "name": "Modern pentathlon - MPN01",
                "startTime": new Date("2024-08-08T11:00"),
                "endTime": new Date("2024-08-08T17:30")
            },
            {
                "name": "Modern pentathlon - MPN02",
                "startTime": new Date("2024-08-09T13:00"),
                "endTime": new Date("2024-08-09T19:00")
            },
            {
                "name": "Modern pentathlon - MPN03",
                "startTime": new Date("2024-08-10T09:30"),
                "endTime": new Date("2024-08-10T15:30")
            },
            {
                "name": "Modern pentathlon - MPN04",
                "startTime": new Date("2024-08-10T17:00"),
                "endTime": new Date("2024-08-10T19:30")
            },
            {
                "name": "Modern pentathlon - MPN05",
                "startTime": new Date("2024-08-11T11:00"),
                "endTime": new Date("2024-08-11T13:30")
            }
        ]
    },
    {
        id: 36,
        name: "Judo",
        selected: false,
        sessions: [
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
        sessions: [
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
        name: "Handball",
        selected: false,
        sessions: [
            {
                name: "Handball - HBL01",
                startTime: new Date("2024-07-25T09:00"),
                endTime: new Date("2024-07-25T12:30"),
            },
            {
                name: "Handball - HBL02",
                startTime: new Date("2024-07-25T14:00"),
                endTime: new Date("2024-07-25T17:30"),
            },
            {
                name: "Handball - HBL03",
                startTime: new Date("2024-07-25T19:00"),
                endTime: new Date("2024-07-25T22:30"),
            },
            {
                name: "Handball - HBL04",
                startTime: null,
                endTime: null,
            },
            {
                name: "Handball - HBL05",
                startTime: new Date("2024-07-27T09:00"),
                endTime: new Date("2024-07-27T12:30"),
            },
            {
                name: "Handball - HBL06",
                startTime: new Date("2024-07-27T14:00"),
                endTime: new Date("2024-07-27T17:30"),
            },
            {
                name: "Handball - HBL07",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T22:30"),
            },
            {
                name: "Handball - HBL08",
                startTime: new Date("2024-07-28T09:00"),
                endTime: new Date("2024-07-28T12:30"),
            },
            {
                name: "Handball - HBL09",
                startTime: new Date("2024-07-28T14:00"),
                endTime: new Date("2024-07-28T17:30"),
            },
            {
                name: "Handball - HBL10",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T22:30"),
            },
            {
                name: "Handball - HBL11",
                startTime: new Date("2024-07-29T09:00"),
                endTime: new Date("2024-07-29T12:30"),
            },
            {
                name: "Handball - HBL12",
                startTime: new Date("2024-07-29T14:00"),
                endTime: new Date("2024-07-29T17:30"),
            },
            {
                name: "Handball - HBL13",
                startTime: new Date("2024-07-30T09:00"),
                endTime: new Date("2024-07-30T12:30"),
            },
            {
                name: "Handball - HBL14",
                startTime: new Date("2024-07-30T14:00"),
                endTime: new Date("2024-07-30T17:30"),
            },
            {
                name: "Handball - HBL15",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T22:30"),
            },
            {
                name: "Handball - HBL16",
                startTime: new Date("2024-07-31T09:00"),
                endTime: new Date("2024-07-31T12:30"),
            },
            {
                name: "Handball - HBL17",
                startTime: new Date("2024-07-31T14:00"),
                endTime: new Date("2024-07-31T17:30"),
            },
            {
                name: "Handball - HBL18",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T22:30"),
            },
            {
                name: "Handball - HBL19",
                startTime: new Date("2024-08-01T09:00"),
                endTime: new Date("2024-08-01T12:30"),
            },
            {
                name: "Handball - HBL20",
                startTime: new Date("2024-08-01T14:00"),
                endTime: new Date("2024-08-01T17:30"),
            },
            {
                name: "Handball - HBL21",
                startTime: new Date("2024-08-01T19:00"),
                endTime: new Date("2024-08-01T22:30"),
            },
            {
                name: "Handball - HBL22",
                startTime: new Date("2024-08-02T09:00"),
                endTime: new Date("2024-08-02T12:30"),
            },
            {
                name: "Handball - HBL23",
                startTime: new Date("2024-08-02T14:00"),
                endTime: new Date("2024-08-02T17:30"),
            },
            {
                name: "Handball - HBL24",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
            {
                name: "Handball - HBL25",
                startTime: new Date("2024-08-03T09:00"),
                endTime: new Date("2024-08-03T12:30"),
            },
            {
                name: "Handball - HBL26",
                startTime: new Date("2024-08-03T14:00"),
                endTime: new Date("2024-08-03T17:30"),
            },
            {
                name: "Handball - HBL27",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:30"),
            },
            {
                name: "Handball - HBL28",
                startTime: new Date("2024-08-04T09:00"),
                endTime: new Date("2024-08-04T12:30"),
            },
            {
                name: "Handball - HBL29",
                startTime: new Date("2024-08-04T14:00"),
                endTime: new Date("2024-08-04T17:30"),
            },
            {
                name: "Handball - HBL30",
                startTime: new Date("2024-08-04T19:00"),
                endTime: new Date("2024-08-04T22:30"),
            },
            {
                name: "Handball - HBL31",
                startTime: new Date("2024-08-05T09:00"),
                endTime: new Date("2024-08-05T12:30"),
            },
            {
                name: "Handball - HBL32",
                startTime: new Date("2024-08-05T14:00"),
                endTime: new Date("2024-08-05T17:30"),
            },
            {
                name: "Handball - HBL33",
                startTime: new Date("2024-08-05T19:00"),
                endTime: new Date("2024-08-05T22:30"),
            },
            {
                name: "Handball - HBL34",
                startTime: new Date("2024-08-06T09:30"),
                endTime: new Date("2024-08-06T11:30"),
            },
            {
                name: "Handball - HBL35",
                startTime: new Date("2024-08-06T13:30"),
                endTime: new Date("2024-08-06T15:30"),
            },
            {
                name: "Handball - HBL36",
                startTime: new Date("2024-08-07T09:30"),
                endTime: new Date("2024-08-07T11:30"),
            },
            {
                name: "Handball - HBL37",
                startTime: new Date("2024-08-07T13:30"),
                endTime: new Date("2024-08-07T15:30"),
            },
            {
                name: "Handball - HBL38",
                startTime: new Date("2024-08-07T16:30"),
                endTime: new Date("2024-08-07T18:30"),
            },
            {
                name: "Handball - HBL39",
                startTime: new Date("2024-08-07T21:30"),
                endTime: new Date("2024-08-07T23:30"),
            },
            {
                name: "Handball - HBL40",
                startTime: new Date("2024-08-08T16:30"),
                endTime: new Date("2024-08-08T18:30"),
            },
            {
                name: "Handball - HBL41",
                startTime: new Date("2024-08-08T21:30"),
                endTime: new Date("2024-08-08T23:30"),
            },
            {
                name: "Handball - HBL42",
                startTime: new Date("2024-08-09T16:30"),
                endTime: new Date("2024-08-09T18:30"),
            },
            {
                name: "Handball - HBL43",
                startTime: new Date("2024-08-09T21:30"),
                endTime: new Date("2024-08-09T23:30"),
            },
            {
                name: "Handball - HBL44",
                startTime: new Date("2024-08-10T10:00"),
                endTime: new Date("2024-08-10T12:00"),
            },
            {
                name: "Handball - HBL45",
                startTime: new Date("2024-08-10T15:00"),
                endTime: new Date("2024-08-10T17:30"),
            },
            {
                name: "Handball - HBL46",
                startTime: new Date("2024-08-11T09:00"),
                endTime: new Date("2024-08-11T11:00"),
            },

        ]
    },
    {
        id: 39,
        name: "Trampoline gymnastics",
        selected: false,
        sessions: [
            {
                name: "Trampoline gymnastics - GTR01",
                startTime: new Date("2024-08-02T12:00"),
                endTime: new Date("2024-08-02T14:30"),
            },
            {
                name: "Trampoline gymnastics  - GTR02",
                startTime: new Date("2024-08-02T18:00"),
                endTime: new Date("2024-08-02T20:30"),
            }
        ]
    },
    {
        id: 40,
        name: "Rhythmic gymnastics",
        selected: false,
        sessions: [
            {
                name: "Rhythmic gymnastics - GRY01",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:00"),
            },
            {
                name: "Rhythmic gymnastics - GRY02",
                startTime: new Date("2024-08-08T15:00"),
                endTime: new Date("2024-08-08T18:00"),
            },
            {
                name: "Rhythmic gymnastics - GRY03",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T12:30"),
            },
            {
                name: "Rhythmic gymnastics - GRY04",
                startTime: new Date("2024-08-09T14:30"),
                endTime: new Date("2024-08-09T17:00"),
            },
            {
                name: "Rhythmic gymnastics - GRY05",
                startTime: new Date("2024-08-10T14:00"),
                endTime: new Date("2024-08-10T15:45"),
            }
        ]
    },
    {
        id: 41,
        name: "Golf",
        selected: false,
        sessions: [
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
        name: "Artistic gymnastics",
        selected: false,
        sessions: [
            {
                name: "Artistic gymnastics - GAR01",
                startTime: new Date("2024-07-27T11:00"),
                endTime: new Date("2024-07-27T13:30"),
            },
            {
                name: "Artistic gymnastics - GAR02",
                startTime: new Date("2024-07-27T15:30"),
                endTime: new Date("2024-07-27T18:00"),
            },
            {
                name: "Artistic gymnastics - GAR03",
                startTime: new Date("2024-07-27T20:00"),
                endTime: new Date("2024-07-27T22:30"),
            },
            {
                name: "Artistic gymnastics - GAR04",
                startTime: new Date("2024-07-28T09:30"),
                endTime: new Date("2024-07-28T13:20"),
            },
            {
                name: "Artistic gymnastics - GAR05",
                startTime: new Date("2024-07-28T14:50"),
                endTime: new Date("2024-07-28T16:30"),
            },
            {
                name: "Artistic gymnastics - GAR06",
                startTime: new Date("2024-07-28T18:00"),
                endTime: new Date("2024-07-28T19:40"),
            },
            {
                name: "Artistic gymnastics - GAR07",
                startTime: new Date("2024-07-28T21:10"),
                endTime: new Date("2024-07-28T22:50"),
            },
            {
                name: "Artistic gymnastics - GAR08",
                startTime: new Date("2024-07-29T17:30"),
                endTime: new Date("2024-07-29T20:30"),
            },
            {
                name: "Artistic gymnastics - GAR09",
                startTime: new Date("2024-07-30T18:15"),
                endTime: new Date("2024-07-30T20:30"),
            },
            {
                name: "Artistic gymnastics - GAR10",
                startTime: new Date("2024-07-31T17:30"),
                endTime: new Date("2024-07-31T20:15"),
            },
            {
                name: "Artistic gymnastics - GAR11",
                startTime: new Date("2024-08-01T18:15"),
                endTime: new Date("2024-08-01T20:25"),
            },
            {
                name: "Artistic gymnastics - GAR12",
                startTime: new Date("2024-08-03T15:30"),
                endTime: new Date("2024-08-03T18:00"),
            },
            {
                name: "Artistic gymnastics - GAR13",
                startTime: new Date("2024-08-04T15:00"),
                endTime: new Date("2024-08-04T17:25"),
            },
            {
                name: "Artistic gymnastics - GAR14",
                startTime: new Date("2024-08-05T12:00"),
                endTime: new Date("2024-08-05T15:15"),
            }
        ]
    },
    {
        id: 43,
        name: "Fencing",
        selected: false,
        sessions: [
            {
                name: "Fencing - FEN01",
                startTime: new Date("2024-07-27T10:00"),
                endTime: new Date("2024-07-27T16:40"),
            },
            {
                name: "Fencing - FEN02",
                startTime: new Date("2024-07-27T19:00"),
                endTime: new Date("2024-07-27T22:50"),
            },
            {
                name: "Fencing - FEN03",
                startTime: new Date("2024-07-28T09:30"),
                endTime: new Date("2024-07-28T16:50"),
            },
            {
                name: "Fencing - FEN04",
                startTime: new Date("2024-07-28T19:00"),
                endTime: new Date("2024-07-28T23:10"),
            },
            {
                name: "Fencing - FEN05",
                startTime: new Date("2024-07-29T10:00"),
                endTime: new Date("2024-07-29T16:40"),
            },
            {
                name: "Fencing - FEN06",
                startTime: new Date("2024-07-29T19:00"),
                endTime: new Date("2024-07-29T22:50"),
            },
            {
                name: "Fencing - FEN07",
                startTime: new Date("2024-07-30T09:30"),
                endTime: new Date("2024-07-30T16:50"),
            },
            {
                name: "Fencing - FEN08",
                startTime: new Date("2024-07-30T19:00"),
                endTime: new Date("2024-07-30T23:10"),
            },
            {
                name: "Fencing - FEN09",
                startTime: new Date("2024-07-31T10:00"),
                endTime: new Date("2024-07-31T16:40"),
            },
            {
                name: "Fencing - FEN10",
                startTime: new Date("2024-07-31T19:00"),
                endTime: new Date("2024-07-31T22:50"),
            },
            {
                name: "Fencing - FEN11",
                startTime: new Date("2024-08-01T09:30"),
                endTime: new Date("2024-08-01T16:50"),
            },
            {
                name: "Fencing - FEN12",
                startTime: new Date("2024-08-01T19:00"),
                endTime: new Date("2024-08-01T23:10"),
            },
            {
                name: "Fencing - FEN13",
                startTime: new Date("2024-08-02T10:00"),
                endTime: new Date("2024-08-02T16:40"),
            },
            {
                name: "Fencing - FEN14",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:50"),
            },
            {
                name: "Fencing - FEN15",
                startTime: new Date("2024-08-03T09:30"),
                endTime: new Date("2024-08-03T16:50"),
            },
            {
                name: "Fencing - FEN16",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T23:10"),
            },
            {
                name: "Fencing - FEN17",
                startTime: new Date("2024-08-04T10:00"),
                endTime: new Date("2024-08-04T17:10"),
            },
            {
                name: "Fencing - FEN18",
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