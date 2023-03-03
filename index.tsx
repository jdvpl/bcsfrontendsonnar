export const response = [
  {
    basePath: 'https://dev.bancocajasocialsa.org/bcs-mortgage',
    path: '/customer/DataProcessing',
    method: 'post',
    body: {
      policy_and_terms: true,
      commercial_terms: false,
      document_type: 'CC',
      document_number: '1022404222',
      policy_and_terms_label:
        'Acepta tratamiento de datos personales y consulta en centrales de riesgo',
      commercial_terms_label:
        'Autoriza que su información sea utilizada con fines comerciales',
    },
    response: true,
  },
  {
    basePath: 'https://dev.bancocajasocialsa.org/bcs-common/kyc',
    path: '/customers/allow-lists',
    method: 'post',
    body: {
      data: 'HASH',
      //   objeto normal
      //   {
      //     commercialPurposes: false,
      //     dataTreatment: true,
      //     document_number: '1022404222',
      //     document_type: 'CC',
      //     productRegulation: true,
      //   },
    },
    response: {
      result: '',
      data: 'U2FsdGVkX19RWyHDCWlGrAwhhIxt5AxTtZJIxesqhpbPbUa/kmRFCs8ZXwKVVFHSg1JcU00r4oMrJ+tbyl0Z32X8izg5IWfx6bPT4D75Tk3cilpmckUaeKMDsisT8w2aaVndBQaCqB4GmtzLZZ4zHWwbjOwKFGT+jjMYnbWLhz/HsNTJgj6oPpIq2mfBiQkRGiWMzbmCZIzYj+olNjw7pqeWXa+zB9Y8K/Yl1CHCZZrpDyKdyqc0X9Fo3Vf7f0CsxBZUhNm/JImambOSaZ3egfG9Np6W2zr+4NViE8tFX8FQjR1A5F8hqP48ZLijulFQ7skl+UnHoi4g38kgKk5LB3+P3nY7uZjfC4Fki9qxm6SCd6UQmw/Yz/p/kcO/LJY00VUd85A0/ST72u8lrjnyjGtV1EbnoB8dx61s1tQUlWnHVZIlD/IOpxkvhdMMB1IbGi2doHZLoz78K9dMtWPdJvbVengrDbb0ZEMaqXweWchYL7+9WxleAlWaCYJ2QagYF/DgtG7OkJ1bfOokNraruVpvrLQkady5Drt4dJ2YlxqrXgRqdRJQ3Fz8MgvlrtqmsFoUCEgdbgaH6L0olrl+YqqPGxHglgQqK3dxVqa7eD+cxZIi+S2WErtn1yLvvbFzQfZOiTu5kn189Rib2ftoaB/vtJH+ttI12zuZOaTI6Inb+p5RTJ0vSe8Kaoi/98YqG0+RjvBqjmMfpjg0Kz9DzN+KSVlsD8gf3MGRjZf/AgUCeQVJPL8et5qRkFL/esp3PgbWMRhMwLGAYPBOK7+K53jSzcKS6ez/MXsCFtWKVYYRwnCzuqfrufuLYdPzRzw0J1N8Sgd28lYexKC9jlSj+ndztgzKzQSfravyC/QnAcptlDYfWW9MJxrOU3VfEHU3LzikkKku8AL7xoh3TqMshMX/51OW7tpQqMWuwTsqoembK5LRnBIWMTed5Fn2h00FydSePHktNB5l6UrP/JRtfGOVslmWc0a7wND+HcJI5PL/whhxojxKkF4zrjvo6v/WxAozrstuVtsI+MiAy01RPg751RdJK7mZudAgJA14DbUcu5tQXu6KbnkuTWvYPvDDQ9LoyEK/LXokRoeFkzaDXG0LP8Dvi1VaiYMVmO758J6DqDUylDp4k4dJoehjjulLKCH2kMzO2HUGbVoR69plaPWgGXULt9Asz1MGVkOisTo0d+Xn26t2QpGR/1Pts7bnDT3c+Hti7A1+jMQIK5sJ5LkuSIghdLNgPmhlxqFfkoZIBFzq5x/l2JYtRG/xkS6+sdavcAd5DQfvw17IJmZNfGYtuM1xvDppNjmv4pgl8U4=',
      // Objeto normal
      //   {
      //     "state": true,
      //     "nationalized": false,
      //     "items": [
      //       {
      //         "step": "VQ",
      //         "key": "c94b06d6-ea48-4c19-8382-9c9edb567466",
      //         "type": "CLOSED-QUESTION",
      //         "description": "¿Cual es el día de expedición de su cédula?",
      //         "options": [
      //           {
      //             "id": "6d10f971-54ab-4fda-b7b9-d68886187d43",
      //             "option": "14"
      //           },
      //           {
      //             "id": "e7e3725b-fa91-48a5-9b9c-967443fee2d9",
      //             "option": "16"
      //           },
      //           {
      //             "id": "6b652db8-c164-4624-a2fd-ea6679e5551f",
      //             "option": "13"
      //           },
      //           {
      //             "id": "a91e7a2a-d5be-4d76-9b3c-d65df5d3c6a4",
      //             "option": "Ninguno"
      //           }
      //         ]
      //       },
      //       {
      //         "step": "VQ",
      //         "key": "a057dc43-38b8-492d-a0b1-e3df39853dd1",
      //         "type": "CLOSED-QUESTION",
      //         "description": "¿Ha tenido relación con alguno de estos correos electrónicos?",
      //         "options": [
      //           {
      //             "id": "dfa71800-c6aa-416d-97e6-1a41d567c91d",
      //             "option": "juanc●●●●●●0@gmail.com"
      //           },
      //           {
      //             "id": "7ed227cf-e452-47f5-9afc-586e6a4723c3",
      //             "option": "juanc●●●●●●b@gmail.com"
      //           },
      //           {
      //             "id": "4a8707ee-2610-455e-a154-a1bfc83e3bac",
      //             "option": "juanc●●●●●●u@hotmail.com"
      //           },
      //           {
      //             "id": "98864ed9-8c80-47e6-a790-1eacaac17cb9",
      //             "option": "Ninguno"
      //           }
      //         ]
      //       }
      //     ]
      //   }
    },
  },
  {
    basePath: 'https://dev.bancocajasocialsa.org/bcs-mortgage',
    path: '/api-composer/composer/answer',
    method: 'post',
    body: {
      data: 'hash',
      //  objeto normal
      // {
      //     "document_type": "CC",
      //     "document_number": "1022404222",
      //     "items": [
      //         {
      //             "item": "47e024c1-00bb-4960-bcaf-38033ff836a9",
      //             "option": "ca3a36ac-7ca1-4b15-b5bb-8a070f74a2e9"
      //         },
      //         {
      //             "item": "4732e0c8-48b4-4c66-82ce-60100bf91eba",
      //             "option": "8c6127bc-fd2c-403b-aa1b-8acd9e5d1a20"
      //         }
      //     ]
      // }
    },
    response: {
      result: '',
      data: 'U2FsdGVkX1+BjZDb7uLmESON2Ow2O3alR3ZZVQo2LMkVd5Fe/F0Yg5uPtOnASVmpKDcnzE9KYPs4+/NRtD9F4Km8VPIBnrRZ/qMZp0lpFeM5rQ7P4dwPIbfTMC6sAfyqM9gy5Ign9UUcPkPyBzzz5wVZjR9yQI25Qymd0FpXcKeHgOevU7z4jlhGXcIZHhZG9jsOZkd8XLnsE9pCM0doAvsIPt7f3qcObJxX7UZGqOSg+d797utHH7MLUNOo3PXL19Eo5XYpZVhw3nYK5sJtm4A0FcfmtSGrMaq2d5b1I+6XYb1mQ88Wv1l/KlDS/jdiADv89LvPeLPn3gtidJroaaQ+875xEBS4QmphJ9WxfgODNjWlM9Idwo9rjBVXHhlu/iT/dy5OdwjSzVK2Hg9zIjYbGeYvw0AGonFGwoRnLO1TiS+tNusl+1y7szwAusdV4C4Abb8HC+GEK5p5IiQrK6n98TrDHlgUQomLTh68ap3IIM3hW2ei1jUSng89ROOEUyz/1LYj6o8CGKvBDPKbb06lHGyFTRvzxYo4Rjy/BD0lIfkWm0dnGjPOPUnqIq7NLnRNwjBt2L+sFMLoysBTy5vFKcQmDYKluoDeCI5DxmE=',
      //   objeto normal
      //   step: 'AUTH', // si tienen canales es AUTH
      //   key: 'baa82642-cb82-4051-b2e4-140e0b7c5fde',
      //   type: 'CLOSED-QUESTION',
      //   description: 'Seleccione su número de celular',
      //   options: [
      //     { id: '91154aa5-dac3-4cb8-a79c-02f600fab65f', option: '3017●●●●31' },
      //     { id: 'ccfa5d34-f678-4cf6-ae27-030ab264a817', option: '3230●●●●24' },
      //     { id: 'b59e5c1e-c588-4c27-bd6f-697148e23b77', option: '3510●●●●88' },
      //     { id: '7bdfb33c-ff05-4fd1-99a1-93c20f532710', option: 'Ninguno' },
      //   ],
    },
  },
];
