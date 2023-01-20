import React from "react";

function LogoViviendaWhite({ height = "34", width = "100%" }) {
  return <svg width={width} height={height} viewBox={`0 0 450 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4268 17.7734H20.2373C20.1598 19.4557 19.7061 20.9388 18.876 22.2227C18.0459 23.5065 16.8949 24.5081 15.4229 25.2275C13.9619 25.9359 12.2354 26.29 10.2432 26.29C8.62728 26.29 7.18294 26.0189 5.91016 25.4766C4.64844 24.9342 3.57487 24.154 2.68945 23.1357C1.8151 22.1175 1.14551 20.8835 0.680664 19.4336C0.226888 17.9837 0 16.3512 0 14.5361V13.2246C0 11.4095 0.237956 9.77702 0.713867 8.32715C1.20085 6.86621 1.88704 5.62663 2.77246 4.6084C3.66895 3.5791 4.74251 2.79329 5.99316 2.25098C7.24382 1.70866 8.63281 1.4375 10.1602 1.4375C12.263 1.4375 14.0394 1.8138 15.4893 2.56641C16.9391 3.31901 18.0625 4.35384 18.8594 5.6709C19.6562 6.97689 20.1266 8.46549 20.2705 10.1367H14.46C14.4378 9.22917 14.2829 8.47103 13.9951 7.8623C13.7074 7.24251 13.2536 6.77767 12.6338 6.46777C12.014 6.15788 11.1895 6.00293 10.1602 6.00293C9.44076 6.00293 8.81543 6.13574 8.28418 6.40137C7.75293 6.66699 7.31022 7.08757 6.95605 7.66309C6.60189 8.23861 6.33626 8.98568 6.15918 9.9043C5.99316 10.8118 5.91016 11.9076 5.91016 13.1914V14.5361C5.91016 15.82 5.98763 16.9157 6.14258 17.8232C6.29753 18.7308 6.54655 19.4723 6.88965 20.0479C7.23275 20.6234 7.67546 21.0495 8.21777 21.3262C8.77116 21.5918 9.44629 21.7246 10.2432 21.7246C11.1286 21.7246 11.8757 21.5863 12.4844 21.3096C13.0931 21.0218 13.5635 20.5902 13.8955 20.0146C14.2275 19.4281 14.4046 18.681 14.4268 17.7734Z" fill="white" />
    <path d="M28.0321 12.4443V25.958H22.4373V7.99512H27.6668L28.0321 12.4443ZM33.3446 7.8623L33.245 13.0586C33.0236 13.0365 32.7248 13.0088 32.3485 12.9756C31.9722 12.9424 31.6567 12.9258 31.4022 12.9258C30.7492 12.9258 30.1847 13.0033 29.7088 13.1582C29.244 13.3021 28.8566 13.5234 28.5467 13.8223C28.2479 14.11 28.0265 14.4753 27.8827 14.918C27.7498 15.3607 27.689 15.8753 27.7 16.4619L26.6873 15.7979C26.6873 14.5915 26.8036 13.4958 27.036 12.5107C27.2795 11.5146 27.6226 10.6569 28.0653 9.9375C28.508 9.20703 29.0448 8.64811 29.6756 8.26074C30.3065 7.8623 31.0148 7.66309 31.8006 7.66309C32.0773 7.66309 32.3485 7.67969 32.6141 7.71289C32.8908 7.74609 33.1343 7.7959 33.3446 7.8623Z" fill="white" />
    <path d="M43.2975 26.29C41.8366 26.29 40.5306 26.0632 39.3796 25.6094C38.2285 25.1445 37.2546 24.5081 36.4577 23.7002C35.6719 22.8923 35.0687 21.9626 34.6481 20.9111C34.2386 19.8597 34.0339 18.7474 34.0339 17.5742V16.9434C34.0339 15.6263 34.2165 14.4089 34.5817 13.291C34.947 12.1621 35.4893 11.1771 36.2087 10.3359C36.9281 9.49479 37.8301 8.8418 38.9147 8.37695C39.9994 7.90104 41.2611 7.66309 42.6999 7.66309C43.9727 7.66309 45.1126 7.86784 46.1198 8.27734C47.127 8.68685 47.9792 9.27344 48.6764 10.0371C49.3848 10.8008 49.9216 11.7249 50.2868 12.8096C50.6631 13.8942 50.8512 15.1117 50.8512 16.4619V18.7363H36.1755V15.2334H45.3893V14.8018C45.4004 14.2041 45.2953 13.695 45.0739 13.2744C44.8636 12.8538 44.5537 12.5329 44.1442 12.3115C43.7347 12.0902 43.2367 11.9795 42.6501 11.9795C42.0414 11.9795 41.5378 12.1123 41.1393 12.3779C40.752 12.6436 40.4476 13.0088 40.2262 13.4736C40.016 13.9274 39.8665 14.4531 39.778 15.0508C39.6895 15.6484 39.6452 16.2793 39.6452 16.9434V17.5742C39.6452 18.2383 39.7337 18.8415 39.9108 19.3838C40.099 19.9261 40.3646 20.391 40.7077 20.7783C41.0619 21.1546 41.4824 21.4479 41.9694 21.6582C42.4675 21.8685 43.0319 21.9736 43.6628 21.9736C44.4264 21.9736 45.179 21.8298 45.9206 21.542C46.6621 21.2542 47.2985 20.7783 47.8298 20.1143L50.3698 23.1357C50.0046 23.6559 49.4844 24.1595 48.8093 24.6465C48.1452 25.1335 47.3483 25.5319 46.4186 25.8418C45.4889 26.1406 44.4486 26.29 43.2975 26.29ZM39.3298 5.6543L42.6169 0.441406H48.527L43.8952 5.6543H39.3298Z" fill="white" />
    <path d="M63.1118 21.8408V0.458008H68.7398V25.958H63.6929L63.1118 21.8408ZM52.0884 17.1924V16.8438C52.0884 15.4824 52.2378 14.2428 52.5366 13.125C52.8355 11.9961 53.2782 11.0277 53.8648 10.2197C54.4514 9.40072 55.1818 8.76986 56.0562 8.32715C56.9305 7.88444 57.9377 7.66309 59.0777 7.66309C60.0959 7.66309 60.9868 7.90104 61.7505 8.37695C62.5142 8.8418 63.1672 9.49479 63.7095 10.3359C64.2518 11.1771 64.6945 12.1621 65.0376 13.291C65.3807 14.4089 65.6408 15.6152 65.8179 16.9102V17.3252C65.6408 18.5426 65.3807 19.6937 65.0376 20.7783C64.6945 21.8519 64.2518 22.8037 63.7095 23.6338C63.1672 24.4639 62.5086 25.1169 61.7339 25.5928C60.9702 26.0576 60.0737 26.29 59.0445 26.29C57.9045 26.29 56.8973 26.0632 56.023 25.6094C55.1597 25.1556 54.4348 24.5192 53.8482 23.7002C53.2726 22.8812 52.8355 21.9183 52.5366 20.8115C52.2378 19.7048 52.0884 18.4984 52.0884 17.1924ZM57.6831 16.8438V17.1924C57.6831 17.8675 57.7274 18.4928 57.8159 19.0684C57.9045 19.6439 58.0539 20.153 58.2642 20.5957C58.4855 21.0273 58.7733 21.3649 59.1275 21.6084C59.4927 21.8519 59.9409 21.9736 60.4722 21.9736C61.1916 21.9736 61.7837 21.8021 62.2486 21.459C62.7245 21.1159 63.0731 20.6289 63.2944 19.998C63.5269 19.3672 63.6265 18.6257 63.5933 17.7734V16.4619C63.6154 15.7314 63.5656 15.0895 63.4439 14.5361C63.3221 13.9717 63.1284 13.5013 62.8628 13.125C62.6083 12.7487 62.2818 12.4665 61.8833 12.2783C61.496 12.0791 61.0366 11.9795 60.5054 11.9795C59.9852 11.9795 59.5425 12.1012 59.1773 12.3447C58.8231 12.5882 58.5353 12.9313 58.314 13.374C58.0926 13.8057 57.9321 14.3203 57.8325 14.918C57.7329 15.5046 57.6831 16.1465 57.6831 16.8438Z" fill="white" />
    <path d="M77.4808 7.99512V25.958H71.8695V7.99512H77.4808ZM71.5375 3.36328C71.5375 2.56641 71.8252 1.91341 72.4007 1.4043C72.9763 0.895182 73.7233 0.640625 74.642 0.640625C75.5606 0.640625 76.3076 0.895182 76.8832 1.4043C77.4587 1.91341 77.7464 2.56641 77.7464 3.36328C77.7464 4.16016 77.4587 4.81315 76.8832 5.32227C76.3076 5.83138 75.5606 6.08594 74.642 6.08594C73.7233 6.08594 72.9763 5.83138 72.4007 5.32227C71.8252 4.81315 71.5375 4.16016 71.5375 3.36328Z" fill="white" />
    <path d="M90.0568 7.99512V11.8799H79.2326V7.99512H90.0568ZM81.507 3.5293H87.1018V20.0977C87.1018 20.5736 87.1571 20.9443 87.2678 21.21C87.3785 21.4645 87.5666 21.6471 87.8322 21.7578C88.1089 21.8574 88.4742 21.9072 88.9279 21.9072C89.2489 21.9072 89.5145 21.9017 89.7248 21.8906C89.9351 21.8685 90.1343 21.8408 90.3225 21.8076V25.8086C89.8466 25.9635 89.3485 26.0798 88.8283 26.1572C88.3081 26.2458 87.7548 26.29 87.1682 26.29C85.9729 26.29 84.9491 26.1019 84.0969 25.7256C83.2557 25.3493 82.6138 24.7572 82.1711 23.9492C81.7284 23.1413 81.507 22.0898 81.507 20.7949V3.5293Z" fill="white" />
    <path d="M90.7461 17.1592V16.8105C90.7461 15.4935 90.9343 14.2816 91.3106 13.1748C91.6869 12.057 92.2403 11.0885 92.9707 10.2695C93.7012 9.45052 94.6032 8.81413 95.6768 8.36035C96.7504 7.89551 97.9899 7.66309 99.3955 7.66309C100.812 7.66309 102.057 7.89551 103.131 8.36035C104.216 8.81413 105.123 9.45052 105.854 10.2695C106.584 11.0885 107.137 12.057 107.514 13.1748C107.89 14.2816 108.078 15.4935 108.078 16.8105V17.1592C108.078 18.4652 107.89 19.6771 107.514 20.7949C107.137 21.9017 106.584 22.8701 105.854 23.7002C105.123 24.5192 104.221 25.1556 103.147 25.6094C102.074 26.0632 100.834 26.29 99.4287 26.29C98.0232 26.29 96.778 26.0632 95.6934 25.6094C94.6088 25.1556 93.7012 24.5192 92.9707 23.7002C92.2403 22.8701 91.6869 21.9017 91.3106 20.7949C90.9343 19.6771 90.7461 18.4652 90.7461 17.1592ZM96.3409 16.8105V17.1592C96.3409 17.8343 96.3907 18.4652 96.4903 19.0518C96.5899 19.6383 96.7559 20.153 96.9883 20.5957C97.2207 21.0273 97.5362 21.3649 97.9346 21.6084C98.333 21.8519 98.8311 21.9736 99.4287 21.9736C100.015 21.9736 100.502 21.8519 100.89 21.6084C101.288 21.3649 101.604 21.0273 101.836 20.5957C102.068 20.153 102.234 19.6383 102.334 19.0518C102.434 18.4652 102.483 17.8343 102.483 17.1592V16.8105C102.483 16.1576 102.434 15.5433 102.334 14.9678C102.234 14.3812 102.068 13.8665 101.836 13.4238C101.604 12.9701 101.288 12.6159 100.89 12.3613C100.491 12.1068 99.9932 11.9795 99.3955 11.9795C98.809 11.9795 98.3164 12.1068 97.918 12.3613C97.5306 12.6159 97.2207 12.9701 96.9883 13.4238C96.7559 13.8665 96.5899 14.3812 96.4903 14.9678C96.3907 15.5433 96.3409 16.1576 96.3409 16.8105Z" fill="white" />
    <path d="M136.364 11.1826V15.665H123.963V11.1826H136.364ZM125.905 1.58691V25.7588H120.078V1.58691H125.905ZM140.282 1.58691V25.7588H134.472V1.58691H140.282Z" fill="#00B5FF" />
    <path d="M149.289 7.7959V25.7588H143.678V7.7959H149.289ZM143.346 3.16406C143.346 2.36719 143.633 1.71419 144.209 1.20508C144.784 0.695964 145.531 0.441406 146.45 0.441406C147.369 0.441406 148.116 0.695964 148.691 1.20508C149.267 1.71419 149.555 2.36719 149.555 3.16406C149.555 3.96094 149.267 4.61393 148.691 5.12305C148.116 5.63216 147.369 5.88672 146.45 5.88672C145.531 5.88672 144.784 5.63216 144.209 5.12305C143.633 4.61393 143.346 3.96094 143.346 3.16406Z" fill="#00B5FF" />
    <path d="M158.047 11.249V32.665H152.452V7.7959H157.665L158.047 11.249ZM169.07 16.5615V16.9102C169.07 18.2161 168.921 19.4281 168.622 20.5459C168.323 21.6637 167.88 22.6377 167.294 23.4678C166.707 24.2979 165.977 24.9453 165.102 25.4102C164.239 25.8639 163.237 26.0908 162.097 26.0908C161.024 26.0908 160.1 25.8529 159.325 25.377C158.55 24.901 157.903 24.2425 157.382 23.4014C156.862 22.5602 156.442 21.5973 156.121 20.5127C155.8 19.4281 155.545 18.2826 155.357 17.0762V16.6279C155.545 15.333 155.8 14.1322 156.121 13.0254C156.442 11.9076 156.862 10.9336 157.382 10.1035C157.903 9.27344 158.545 8.62598 159.308 8.16113C160.083 7.69629 161.007 7.46387 162.081 7.46387C163.221 7.46387 164.222 7.67969 165.086 8.11133C165.96 8.54297 166.69 9.16276 167.277 9.9707C167.875 10.7676 168.323 11.7249 168.622 12.8428C168.921 13.9606 169.07 15.2002 169.07 16.5615ZM163.475 16.9102V16.5615C163.475 15.8643 163.425 15.2279 163.326 14.6523C163.226 14.0658 163.066 13.5566 162.844 13.125C162.634 12.6934 162.352 12.3613 161.998 12.1289C161.644 11.8965 161.206 11.7803 160.686 11.7803C160.089 11.7803 159.585 11.8743 159.175 12.0625C158.777 12.2396 158.456 12.5163 158.213 12.8926C157.98 13.2578 157.814 13.7171 157.715 14.2705C157.626 14.8128 157.587 15.4492 157.598 16.1797V17.541C157.576 18.3822 157.659 19.1237 157.847 19.7656C158.035 20.3965 158.362 20.889 158.827 21.2432C159.292 21.5973 159.923 21.7744 160.719 21.7744C161.251 21.7744 161.693 21.6527 162.048 21.4092C162.402 21.1546 162.684 20.806 162.894 20.3633C163.105 19.9095 163.254 19.3893 163.342 18.8027C163.431 18.2161 163.475 17.5853 163.475 16.9102Z" fill="#00B5FF" />
    <path d="M170.523 16.96V16.6113C170.523 15.2943 170.711 14.0824 171.087 12.9756C171.464 11.8577 172.017 10.8893 172.748 10.0703C173.478 9.2513 174.38 8.61491 175.454 8.16113C176.527 7.69629 177.767 7.46387 179.172 7.46387C180.589 7.46387 181.834 7.69629 182.908 8.16113C183.992 8.61491 184.9 9.2513 185.63 10.0703C186.361 10.8893 186.914 11.8577 187.291 12.9756C187.667 14.0824 187.855 15.2943 187.855 16.6113V16.96C187.855 18.266 187.667 19.4779 187.291 20.5957C186.914 21.7025 186.361 22.6709 185.63 23.501C184.9 24.32 183.998 24.9564 182.924 25.4102C181.851 25.8639 180.611 26.0908 179.206 26.0908C177.8 26.0908 176.555 25.8639 175.47 25.4102C174.386 24.9564 173.478 24.32 172.748 23.501C172.017 22.6709 171.464 21.7025 171.087 20.5957C170.711 19.4779 170.523 18.266 170.523 16.96ZM176.118 16.6113V16.96C176.118 17.6351 176.167 18.266 176.267 18.8525C176.367 19.4391 176.533 19.9538 176.765 20.3965C176.998 20.8281 177.313 21.1657 177.711 21.4092C178.11 21.6527 178.608 21.7744 179.206 21.7744C179.792 21.7744 180.279 21.6527 180.667 21.4092C181.065 21.1657 181.38 20.8281 181.613 20.3965C181.845 19.9538 182.011 19.4391 182.111 18.8525C182.21 18.266 182.26 17.6351 182.26 16.96V16.6113C182.26 15.9583 182.21 15.3441 182.111 14.7686C182.011 14.182 181.845 13.6673 181.613 13.2246C181.38 12.7708 181.065 12.4167 180.667 12.1621C180.268 11.9076 179.77 11.7803 179.172 11.7803C178.586 11.7803 178.093 11.9076 177.695 12.1621C177.307 12.4167 176.998 12.7708 176.765 13.2246C176.533 13.6673 176.367 14.182 176.267 14.7686C176.167 15.3441 176.118 15.9583 176.118 16.6113Z" fill="#00B5FF" />
    <path d="M199.468 7.7959V11.6807H188.644V7.7959H199.468ZM190.918 3.33008H196.513V19.8984C196.513 20.3743 196.568 20.7451 196.679 21.0107C196.79 21.2653 196.978 21.4479 197.244 21.5586C197.52 21.6582 197.885 21.708 198.339 21.708C198.66 21.708 198.926 21.7025 199.136 21.6914C199.346 21.6693 199.546 21.6416 199.734 21.6084V25.6094C199.258 25.7643 198.76 25.8805 198.24 25.958C197.719 26.0465 197.166 26.0908 196.579 26.0908C195.384 26.0908 194.36 25.9027 193.508 25.5264C192.667 25.1501 192.025 24.5579 191.582 23.75C191.14 22.9421 190.918 21.8906 190.918 20.5957V3.33008Z" fill="#00B5FF" />
    <path d="M210.052 26.0908C208.591 26.0908 207.285 25.8639 206.134 25.4102C204.983 24.9453 204.009 24.3089 203.212 23.501C202.426 22.693 201.823 21.7633 201.403 20.7119C200.993 19.6605 200.788 18.5482 200.788 17.375V16.7441C200.788 15.4271 200.971 14.2096 201.336 13.0918C201.701 11.9629 202.244 10.9779 202.963 10.1367C203.682 9.29557 204.585 8.64258 205.669 8.17773C206.754 7.70182 208.015 7.46387 209.454 7.46387C210.727 7.46387 211.867 7.66862 212.874 8.07812C213.881 8.48763 214.734 9.07422 215.431 9.83789C216.139 10.6016 216.676 11.5257 217.041 12.6104C217.418 13.695 217.606 14.9124 217.606 16.2627V18.5371H202.93V15.0342H212.144V14.6025C212.155 14.0049 212.05 13.4958 211.828 13.0752C211.618 12.6546 211.308 12.3337 210.899 12.1123C210.489 11.891 209.991 11.7803 209.404 11.7803C208.796 11.7803 208.292 11.9131 207.894 12.1787C207.506 12.4443 207.202 12.8096 206.981 13.2744C206.77 13.7282 206.621 14.2539 206.532 14.8516C206.444 15.4492 206.4 16.0801 206.4 16.7441V17.375C206.4 18.0391 206.488 18.6423 206.665 19.1846C206.853 19.7269 207.119 20.1917 207.462 20.5791C207.816 20.9554 208.237 21.2487 208.724 21.459C209.222 21.6693 209.786 21.7744 210.417 21.7744C211.181 21.7744 211.933 21.6305 212.675 21.3428C213.417 21.055 214.053 20.5791 214.584 19.915L217.124 22.9365C216.759 23.4567 216.239 23.9603 215.564 24.4473C214.9 24.9342 214.103 25.3327 213.173 25.6426C212.243 25.9414 211.203 26.0908 210.052 26.0908Z" fill="#00B5FF" />
    <path d="M227.127 21.7744C227.647 21.7744 228.09 21.6803 228.455 21.4922C228.831 21.293 229.114 21.0163 229.302 20.6621C229.501 20.2969 229.595 19.8597 229.584 19.3506H234.847C234.858 20.7008 234.526 21.8851 233.851 22.9033C233.187 23.9105 232.279 24.6963 231.128 25.2607C229.988 25.8141 228.699 26.0908 227.26 26.0908C225.854 26.0908 224.626 25.8639 223.574 25.4102C222.523 24.9453 221.643 24.3034 220.935 23.4844C220.237 22.6543 219.712 21.6859 219.357 20.5791C219.014 19.4723 218.843 18.2715 218.843 16.9766V16.5947C218.843 15.2998 219.014 14.099 219.357 12.9922C219.712 11.8743 220.237 10.9059 220.935 10.0869C221.643 9.25684 222.517 8.61491 223.558 8.16113C224.609 7.69629 225.832 7.46387 227.227 7.46387C228.721 7.46387 230.038 7.74609 231.178 8.31055C232.329 8.875 233.231 9.69401 233.884 10.7676C234.537 11.8411 234.858 13.1416 234.847 14.6689H229.584C229.595 14.1266 229.512 13.6396 229.335 13.208C229.158 12.7764 228.881 12.4333 228.505 12.1787C228.14 11.9131 227.669 11.7803 227.094 11.7803C226.518 11.7803 226.053 11.9076 225.699 12.1621C225.345 12.4167 225.074 12.7708 224.886 13.2246C224.709 13.6673 224.587 14.1764 224.521 14.752C224.465 15.3275 224.438 15.9417 224.438 16.5947V16.9766C224.438 17.6406 224.465 18.266 224.521 18.8525C224.587 19.4281 224.714 19.9372 224.902 20.3799C225.091 20.8115 225.362 21.1546 225.716 21.4092C226.07 21.6527 226.54 21.7744 227.127 21.7744Z" fill="#00B5FF" />
    <path d="M246.227 21.2432V13.8389C246.227 13.3298 246.155 12.8926 246.012 12.5273C245.868 12.1621 245.641 11.8799 245.331 11.6807C245.021 11.4704 244.606 11.3652 244.086 11.3652C243.665 11.3652 243.306 11.4372 243.007 11.5811C242.708 11.7249 242.481 11.9408 242.326 12.2285C242.171 12.5163 242.094 12.8815 242.094 13.3242H236.499C236.499 12.4941 236.682 11.7249 237.047 11.0166C237.423 10.2972 237.954 9.67188 238.641 9.14062C239.338 8.60938 240.168 8.19987 241.131 7.91211C242.105 7.61328 243.189 7.46387 244.385 7.46387C245.812 7.46387 247.085 7.70182 248.203 8.17773C249.332 8.65365 250.223 9.36751 250.876 10.3193C251.529 11.2601 251.855 12.4443 251.855 13.8721V21.2266C251.855 22.3997 251.922 23.2907 252.055 23.8994C252.187 24.4971 252.376 25.0228 252.619 25.4766V25.7588H247.008C246.742 25.2054 246.543 24.5303 246.41 23.7334C246.288 22.9255 246.227 22.0954 246.227 21.2432ZM246.908 14.7852L246.941 17.7734H244.468C243.947 17.7734 243.505 17.8454 243.14 17.9893C242.785 18.1331 242.498 18.3324 242.276 18.5869C242.066 18.8304 241.911 19.1071 241.811 19.417C241.723 19.7269 241.679 20.0534 241.679 20.3965C241.679 20.7285 241.756 21.0273 241.911 21.293C242.077 21.5475 242.298 21.7467 242.575 21.8906C242.852 22.0345 243.162 22.1064 243.505 22.1064C244.125 22.1064 244.65 21.9902 245.082 21.7578C245.525 21.5143 245.862 21.221 246.095 20.8779C246.327 20.5348 246.443 20.2139 246.443 19.915L247.672 22.2061C247.45 22.6488 247.196 23.097 246.908 23.5508C246.631 24.0046 246.283 24.4251 245.862 24.8125C245.453 25.1888 244.949 25.4987 244.351 25.7422C243.754 25.9746 243.029 26.0908 242.177 26.0908C241.07 26.0908 240.052 25.8639 239.122 25.4102C238.203 24.9564 237.467 24.3255 236.914 23.5176C236.361 22.6986 236.084 21.7578 236.084 20.6953C236.084 19.7656 236.25 18.9355 236.582 18.2051C236.925 17.4746 237.44 16.8548 238.126 16.3457C238.812 15.8366 239.686 15.4492 240.749 15.1836C241.811 14.918 243.062 14.7852 244.501 14.7852H246.908Z" fill="#00B5FF" />
    <path d="M260.264 12.2451V25.7588H254.67V7.7959H259.899L260.264 12.2451ZM265.577 7.66309L265.477 12.8594C265.256 12.8372 264.957 12.8096 264.581 12.7764C264.204 12.7432 263.889 12.7266 263.634 12.7266C262.981 12.7266 262.417 12.804 261.941 12.959C261.476 13.1029 261.089 13.3242 260.779 13.623C260.48 13.9108 260.259 14.276 260.115 14.7188C259.982 15.1615 259.921 15.6761 259.932 16.2627L258.92 15.5986C258.92 14.3923 259.036 13.2965 259.268 12.3115C259.512 11.3154 259.855 10.4577 260.298 9.73828C260.74 9.00781 261.277 8.44889 261.908 8.06152C262.539 7.66309 263.247 7.46387 264.033 7.46387C264.31 7.46387 264.581 7.48047 264.846 7.51367C265.123 7.54688 265.367 7.59668 265.577 7.66309Z" fill="#00B5FF" />
    <path d="M273.073 7.7959V25.7588H267.461V7.7959H273.073ZM267.129 3.16406C267.129 2.36719 267.417 1.71419 267.993 1.20508C268.568 0.695964 269.315 0.441406 270.234 0.441406C271.153 0.441406 271.9 0.695964 272.475 1.20508C273.051 1.71419 273.338 2.36719 273.338 3.16406C273.338 3.96094 273.051 4.61393 272.475 5.12305C271.9 5.63216 271.153 5.88672 270.234 5.88672C269.315 5.88672 268.568 5.63216 267.993 5.12305C267.417 4.61393 267.129 3.96094 267.129 3.16406Z" fill="#00B5FF" />
    <path d="M275.489 16.96V16.6113C275.489 15.2943 275.677 14.0824 276.053 12.9756C276.429 11.8577 276.983 10.8893 277.713 10.0703C278.444 9.2513 279.346 8.61491 280.419 8.16113C281.493 7.69629 282.732 7.46387 284.138 7.46387C285.555 7.46387 286.8 7.69629 287.873 8.16113C288.958 8.61491 289.866 9.2513 290.596 10.0703C291.327 10.8893 291.88 11.8577 292.256 12.9756C292.633 14.0824 292.821 15.2943 292.821 16.6113V16.96C292.821 18.266 292.633 19.4779 292.256 20.5957C291.88 21.7025 291.327 22.6709 290.596 23.501C289.866 24.32 288.964 24.9564 287.89 25.4102C286.816 25.8639 285.577 26.0908 284.171 26.0908C282.766 26.0908 281.521 25.8639 280.436 25.4102C279.351 24.9564 278.444 24.32 277.713 23.501C276.983 22.6709 276.429 21.7025 276.053 20.5957C275.677 19.4779 275.489 18.266 275.489 16.96ZM281.083 16.6113V16.96C281.083 17.6351 281.133 18.266 281.233 18.8525C281.332 19.4391 281.498 19.9538 281.731 20.3965C281.963 20.8281 282.279 21.1657 282.677 21.4092C283.076 21.6527 283.574 21.7744 284.171 21.7744C284.758 21.7744 285.245 21.6527 285.632 21.4092C286.031 21.1657 286.346 20.8281 286.579 20.3965C286.811 19.9538 286.977 19.4391 287.077 18.8525C287.176 18.266 287.226 17.6351 287.226 16.96V16.6113C287.226 15.9583 287.176 15.3441 287.077 14.7686C286.977 14.182 286.811 13.6673 286.579 13.2246C286.346 12.7708 286.031 12.4167 285.632 12.1621C285.234 11.9076 284.736 11.7803 284.138 11.7803C283.552 11.7803 283.059 11.9076 282.661 12.1621C282.273 12.4167 281.963 12.7708 281.731 13.2246C281.498 13.6673 281.332 14.182 281.233 14.7686C281.133 15.3441 281.083 15.9583 281.083 16.6113Z" fill="#00B5FF" />
  </svg>


}

export default LogoViviendaWhite;
