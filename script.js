const categories = [
    {
        id: 1,
        name: "Atletismo",
        selected: false,
        sessions: [
            {
                name: "ATH01",
                startTime: new Date("2024-08-01T07:30"),
                endTime: new Date("2024-08-01T11:45"),
            },
            {
                name: "ATH02",
                startTime: new Date("2024-08-02T10:00"),
                endTime: new Date("2024-08-02T13:00"),
            },
            {
                name: "ATH03",
                startTime: new Date("2024-08-02T19:00"),
                endTime: new Date("2024-08-02T22:00"),
            },
            {
                name: "ATH04",
                startTime: new Date("2024-08-03T10:00"),
                endTime: new Date("2024-08-03T16:00"),
            },
            {
                name: "ATH05",
                startTime: new Date("2024-08-03T19:00"),
                endTime: new Date("2024-08-03T22:00"),
            },
            {
                name: "ATH06",
                startTime: new Date("2024-08-04T10:00"),
                endTime: new Date("2024-08-04T13:00"),
            },
            {
                name: "ATH07",
                startTime: new Date("2024-08-04T19:00"),
                endTime: new Date("2024-08-04T22:00"),
            },
            {
                name: "ATH08",
                startTime: new Date("2024-08-05T10:00"),
                endTime: new Date("2024-08-05T13:00"),
            },
            {
                name: "ATH09",
                startTime: new Date("2024-08-05T19:00"),
                endTime: new Date("2024-08-05T22:00"),
            },
            {
                name: "ATH10",
                startTime: new Date("2024-08-06T10:00"),
                endTime: new Date("2024-08-06T13:00"),
            },
            {
                name: "ATH11",
                startTime: new Date("2024-08-06T19:00"),
                endTime: new Date("2024-08-06T22:00"),
            },
            {
                name: "ATH12",
                startTime: new Date("2024-08-07T07:30"),
                endTime: new Date("2024-08-07T11:00"),
            },
            {
                name: "ATH13",
                startTime: new Date("2024-08-07T10:00"),
                endTime: new Date("2024-08-07T13:00"),
            },
            {
                name: "ATH14",
                startTime: new Date("2024-08-07T19:00"),
                endTime: new Date("2024-08-07T22:00"),
            },
            {
                name: "ATH15",
                startTime: new Date("2024-08-08T10:00"),
                endTime: new Date("2024-08-08T13:00"),
            },
            {
                name: "ATH16",
                startTime: new Date("2024-08-08T19:00"),
                endTime: new Date("2024-08-08T22:00"),
            },
            {
                name: "ATH17",
                startTime: new Date("2024-08-09T10:00"),
                endTime: new Date("2024-08-09T13:00"),
            },
            {
                name: "ATH18",
                startTime: new Date("2024-08-09T19:00"),
                endTime: new Date("2024-08-09T22:00"),
            },
            {
                name: "ATH19",
                startTime: new Date("2024-08-10T08:00"),
                endTime: new Date("2024-08-10T11:15"),
            },
            {
                name: "ATH20",
                startTime: new Date("2024-08-10T19:00"),
                endTime: new Date("2024-08-10T22:00"),
            },
            {
                name: "ATH21",
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
                name: "BDM01",
                startTime: new Date("2024-07-27T08:30"),
                endTime: new Date("2024-07-27T12:00"),
            },
            {
                name: "BDM02",
                startTime: new Date("2024-07-27T14:00"),
                endTime: new Date("2024-07-27T17:30"),
            },
            {
                name: "BDM03",
                startTime: new Date("2024-07-27T19:30"),
                endTime: new Date("2024-07-27T23:00"),
            },
            {
                name: "BDM04",
                startTime: new Date("2024-07-28T08:30"),
                endTime: new Date("2024-07-28T12:00"),
            },
            {
                name: "BDM05",
                startTime: new Date("2024-07-28T14:00"),
                endTime: new Date("2024-07-28T17:30"),
            },
            {
                name: "BDM06",
                startTime: new Date("2024-07-28T19:30"),
                endTime: new Date("2024-07-28T23:00"),
            },
            {
                name: "BDM07",
                startTime: new Date("2024-07-29T08:30"),
                endTime: new Date("2024-07-29T12:00"),
            },
            {
                name: "BDM08",
                startTime: new Date("2024-07-29T14:00"),
                endTime: new Date("2024-07-29T17:30"),
            },
            {
                name: "BDM09",
                startTime: new Date("2024-07-29T19:30"),
                endTime: new Date("2024-07-29T23:00"),
            },
            {
                name: "BDM10",
                startTime: new Date("2024-07-30T08:30"),
                endTime: new Date("2024-07-30T12:00"),
            },
            {
                name: "BDM11",
                startTime: new Date("2024-07-30T14:00"),
                endTime: new Date("2024-07-30T17:30"),
            },
            {
                name: "BDM12",
                startTime: new Date("2024-07-30T19:30"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "BDM13",
                startTime: new Date("2024-07-31T08:30"),
                endTime: new Date("2024-07-31T12:00"),
            },
            {
                name: "BDM14",
                startTime: new Date("2024-07-31T14:00"),
                endTime: new Date("2024-07-31T17:30"),
            },
            {
                name: "BDM15",
                startTime: new Date("2024-07-31T19:30"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "BDM16",
                startTime: new Date("2024-08-01T08:30"),
                endTime: new Date("2024-08-01T11:00"),
            },
            {
                name: "BDM17",
                startTime: new Date("2024-08-01T13:00"),
                endTime: new Date("2024-08-01T16:30"),
            },
            {
                name: "BDM18",
                startTime: new Date("2024-08-01T18:30"),
                endTime: new Date("2024-08-01T23:00"),
            },
            {
                name: "BDM19",
                startTime: new Date("2024-08-02T08:30"),
                endTime: new Date("2024-08-02T13:00"),
            },
            {
                name: "BDM20",
                startTime: new Date("2024-08-02T15:00"),
                endTime: new Date("2024-08-02T22:30"),
            },
            {
                name: "BDM21",
                startTime: new Date("2024-08-03T08:30"),
                endTime: new Date("2024-08-03T13:00"),
            },
            {
                name: "BDM22",
                startTime: new Date("2024-08-03T15:00"),
                endTime: new Date("2024-08-03T17:30"),
            },
            {
                name: "BDM23",
                startTime: new Date("2024-08-04T08:30"),
                endTime: new Date("2024-08-04T13:00"),
            },
            {
                name: "BDM24",
                startTime: new Date("2024-08-04T15:00"),
                endTime: new Date("2024-08-04T17:30"),
            },
            {
                name: "BDM25",
                startTime: new Date("2024-08-05T09:45"),
                endTime: new Date("2024-08-05T12:30"),
            },
            {
                name: "BDM26",
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
                name: "BK301",
                startTime: new Date("2024-07-30T17:30"),
                endTime: new Date("2024-07-30T19:30"),
            },
            {
                name: "BK302",
                startTime: new Date("2024-07-30T21:00"),
                endTime: new Date("2024-07-30T23:00"),
            },
            {
                name: "BK303",
                startTime: new Date("2024-07-31T17:30"),
                endTime: new Date("2024-07-31T19:30"),
            },
            {
                name: "BK304",
                startTime: new Date("2024-07-31T21:00"),
                endTime: new Date("2024-07-31T23:00"),
            },
            {
                name: "BK305",
                startTime: new Date("2024-08-01T09:00"),
                endTime: new Date("2024-08-01T11:00"),
            },
            {
                name: "BK306",
                startTime: new Date("2024-08-01T12:30"),
                endTime: new Date("2024-08-01T14:30"),
            },
            {
                name: "BK307",
                startTime: new Date("2024-08-01T18:00"),
                endTime: new Date("2024-08-01T20:00"),
            },
            {
                name: "BK308",
                startTime: new Date("2024-08-01T21:30"),
                endTime: new Date("2024-08-01T23:30"),
            },
            {
                name: "BK309",
                startTime: new Date("2024-08-02T09:00"),
                endTime: new Date("2024-08-02T11:00"),
            },
            {
                name: "BK310",
                startTime: new Date("2024-08-02T12:30"),
                endTime: new Date("2024-08-02T14:30"),
            },
            {
                name: "BK311",
                startTime: new Date("2024-08-02T17:30"),
                endTime: new Date("2024-08-02T19:30"),
            },
            {
                name: "BK312",
                startTime: new Date("2024-08-02T21:00"),
                endTime: new Date("2024-08-02T23:00"),
            },
            {
                name: "BK313",
                startTime: new Date("2024-08-03T17:30"),
                endTime: new Date("2024-08-03T19:30"),
            },
            {
                name: "BK314",
                startTime: new Date("2024-08-03T21:30"),
                endTime: new Date("2024-08-03T23:30"),
            },
            {
                name: "BK315",
                startTime: new Date("2024-08-04T17:30"),
                endTime: new Date("2024-08-04T19:30"),
            },
            {
                name: "BK316",
                startTime: new Date("2024-08-04T21:30"),
                endTime: new Date("2024-08-04T23:30"),
            },
            {
                name: "BK317",
                startTime: new Date("2024-08-05T17:30"),
                endTime: new Date("2024-08-05T19:30"),
            },
            {
                name: "BK318",
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
                name: "BKG01",
                startTime: new Date("2024-08-09T16:00"),
                endTime: new Date("2024-08-09T18:00"),
            },
            {
                name: "BKG02",
                startTime: new Date("2024-08-09T20:00"),
                endTime: new Date("2024-08-09T22:00"),
            },
            {
                name: "BKG03",
                startTime: new Date("2024-08-10T16:00"),
                endTime: new Date("2024-08-10T18:00"),
            },
            {
                name: "BKG04",
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
                name: "BMF01",
                startTime: new Date("2024-07-30T13:25"),
                endTime: new Date("2024-07-30T16:30"),
            },
            {
                name: "BMF02",
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
                name: "BMX01",
                startTime: new Date("2024-08-01T20:00"),
                endTime: new Date("2024-08-01T22:20"),
            },
            {
                name: "BMX02",
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
                name: "ARC01",
                startTime: new Date("2024-07-25T09:30"),
                endTime: new Date("2024-07-25T12:30"),
            },
            {
                name: "ARC02",
                startTime: new Date("2024-07-25T14:15"),
                endTime: new Date("2024-07-25T17:15"),
            },
            {
                name: "ARC03",
                startTime: new Date("2024-07-28T09:30"),
                endTime: new Date("2024-07-28T11:05"),
            },
            {
                name: "ARC04",
                startTime: new Date("2024-07-28T14:15"),
                endTime: new Date("2024-07-28T17:55"),
            },
            {
                name: "ARC05",
                startTime: new Date("2024-07-29T09:30"),
                endTime: new Date("2024-07-29T11:05"),
            },
            {
                name: "ARC06",
                startTime: new Date("2024-07-29T14:15"),
                endTime: new Date("2024-07-29T17:55"),
            },
            {
                name: "ARC07",
                startTime: new Date("2024-07-30T12:00"),
                endTime: new Date("2024-07-30T15:55"),
            },
            {
                name: "ARC08",
                startTime: new Date("2024-07-30T17:45"),
                endTime: new Date("2024-07-30T20:25"),
            },
            {
                name: "ARC09",
                startTime: new Date("2024-07-31T12:00"),
                endTime: new Date("2024-07-31T15:55"),
            },
            {
                name: "ARC10",
                startTime: new Date("2024-07-31T17:45"),
                endTime: new Date("2024-07-31T20:25"),
            },
            {
                name: "ARC11",
                startTime: new Date("2024-08-01T09:30"),
                endTime: new Date("2024-08-01T13:25"),
            },
            {
                name: "ARC12",
                startTime: new Date("2024-08-01T15:30"),
                endTime: new Date("2024-08-01T19:25"),
            },
            {
                name: "ARC13",
                startTime: new Date("2024-08-02T09:30"),
                endTime: new Date("2024-08-02T12:05"),
            },
            {
                name: "ARC14",
                startTime: new Date("2024-08-02T14:15"),
                endTime: new Date("2024-08-02T17:25"),
            },
            {
                name: "ARC15",
                startTime: new Date("2024-08-03T09:30"),
                endTime: new Date("2024-08-03T11:15"),
            },
            {
                name: "ARC16",
                startTime: new Date("2024-08-03T13:00"),
                endTime: new Date("2024-08-03T15:20"),
            },
            {
                name: "ARC17",
                startTime: new Date("2024-08-04T09:30"),
                endTime: new Date("2024-08-04T11:15"),
            },
            {
                name: "ARC18",
                startTime: new Date("2024-08-04T13:00"),
                endTime: new Date("2024-08-04T15:20"),
            },
        ],
    },
];

// Função para renderizar os dados na lista
function renderCategoryList() {
    const lista = document.getElementById('categoryList');

    categories.forEach(category => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'categoryCheckbox';
        checkbox.value = category.id;
        checkbox.checked = category.selected;
        const label = document.createElement('label');
        label.textContent = category.name;
        label.htmlFor = checkbox.value;
        li.appendChild(checkbox);
        li.appendChild(label);
        lista.appendChild(li);
    });
}

const showSelectedButton = document.getElementById('showSelectedButton');
const selectedCategoriesDiv = document.getElementById('selectedCategories');



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

        // imprime as sessões selecionadas
        const selectedCategoriesList = document.createElement('ul');
        for (const sessionName in scheduledSessions) {
            const session = scheduledSessions[sessionName];
            const li = document.createElement('li');
        
            // Adiciona a data se ela existir
            if (session.date) {
                const dateInfo = document.createElement('p');
                dateInfo.textContent = `Data: ${session.date}`;
                li.appendChild(dateInfo);
            }
        
            const sessionNameInfo = document.createElement('p');
            sessionNameInfo.textContent = `Nome da Sessão: ${session.name}`;
            li.appendChild(sessionNameInfo);
        
            const startTimeInfo = document.createElement('p');
            startTimeInfo.textContent = `Horário de Início: ${formatTime(session.startTime)}`;
            li.appendChild(startTimeInfo);
        
            const endTimeInfo = document.createElement('p');
            endTimeInfo.textContent = `Horário de Término: ${formatTime(session.endTime)}`;
            li.appendChild(endTimeInfo);
        
            selectedCategoriesList.appendChild(li);
        }
        selectedCategoriesDiv.appendChild(selectedCategoriesList);
    }
}

function formatTime(dateString) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString('pt-BR', options);
}

// Chame a função para renderizar a lista quando a página carregar
document.addEventListener('DOMContentLoaded', renderCategoryList);

showSelectedButton.addEventListener('click', showSelectedCategories);