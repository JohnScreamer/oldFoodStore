import CasualBtn from "../Buttons/CasualBtn/CasualBtn";
import s from "./OrderTimesUp.module.scss";

const OrderTimesUp = () => {
    return (
        <div className={s.wrapper}>
            <h2>Сьогодні ми вже не доставляємю</h2>
            <p>Закази приймаємо до 20:50,доставляєм з 8:30 до 21:30</p>
            <svg
                width="154"
                height="131"
                viewBox="0 0 154 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M26.2684 101.878C25.727 102.168 16.2941 111.245 12.9208 115.091C23.2699 114.843 28.0384 114.037 28.1425 116.435C28.205 117.573 27.143 118.255 25.9352 118.255C25.1648 118.255 24.1028 118.172 23.3323 118.172C19.3551 118.172 13.6704 118.379 9.6932 118.379C8.44381 118.379 7.38184 117.779 7.38184 116.601C7.38184 115.153 8.94357 113.54 10.0055 112.341C13.7954 107.854 16.7939 104.07 20.4171 101.155C15.9818 101.423 9.9639 101.341 9.85979 101.341C9.27674 101.341 8.77698 101.196 8.36052 100.886C7.90241 100.555 7.67336 100.1 7.67336 99.5418C7.67336 98.3425 8.69369 97.7222 10.7135 97.7222C11.4007 97.7222 12.421 97.7635 13.7954 97.8256C15.1697 97.9083 28.2258 97.2052 28.2258 99.5625C28.2466 100.286 27.5803 101.051 26.2684 101.878Z"
                    fill="white"
                />
                <path
                    d="M14.4096 13.3977C13.9931 13.6252 6.78834 20.5521 4.20627 23.4883C12.1191 23.3022 15.7423 22.6819 15.8464 24.5222C15.888 25.3907 15.0968 25.9076 14.1597 25.9076C13.5767 25.9076 12.7646 25.8456 12.1815 25.8456C9.14135 25.8456 4.81014 25.9903 1.74914 25.9903C0.791281 25.9903 0 25.5354 0 24.6256C0 23.509 1.20774 22.289 2.01984 21.3792C4.91426 17.9468 7.2048 15.0726 9.97428 12.8394C6.58011 13.0462 1.99902 12.9842 1.91573 12.9842C1.45762 12.9842 1.0828 12.8601 0.770455 12.6326C0.416462 12.3845 0.249877 12.033 0.249877 11.5988C0.249877 10.6683 1.02033 10.2134 2.56124 10.2134C3.08182 10.2134 3.8731 10.2341 4.91426 10.2961C5.95541 10.3581 15.9297 9.82051 15.9297 11.6194C15.9297 12.1984 15.4091 12.7774 14.4096 13.3977Z"
                    fill="white"
                />
                <path
                    d="M151.993 3.99227C151.514 4.26107 143.31 12.1599 140.374 15.4889C149.369 15.2615 153.513 14.5791 153.617 16.6676C153.659 17.6601 152.743 18.2391 151.701 18.2391C151.035 18.2391 150.098 18.1563 149.432 18.1563C145.954 18.1563 141.019 18.3218 137.562 18.3218C136.48 18.3218 135.563 17.8048 135.563 16.7709C135.563 15.5096 136.938 14.1242 137.854 13.0697C141.165 9.16164 143.768 5.87391 146.912 3.33058C143.06 3.57871 137.833 3.496 137.729 3.496C137.209 3.496 136.792 3.37194 136.438 3.10313C136.042 2.81365 135.834 2.42078 135.834 1.92452C135.834 0.869966 136.709 0.353027 138.479 0.353027C139.083 0.353027 139.978 0.394382 141.165 0.456415C142.352 0.518447 153.721 -0.101877 153.721 1.96587C153.721 2.62755 153.138 3.28923 151.993 3.99227Z"
                    fill="white"
                />
                <g clip-path="url(#clip0_72_4255)">
                    <path
                        d="M23.4048 131V50.7443C23.4048 22.9635 46.3379 0.353027 74.5151 0.353027C102.692 0.353027 125.625 22.9635 125.625 50.7443V131H23.4048Z"
                        fill="#72A479"
                    />
                    <path
                        d="M74.5153 8.06982C50.6429 8.06982 31.2319 27.2077 31.2319 50.7442V123.283H117.877V50.7442C117.877 27.2077 98.4659 8.06982 74.5153 8.06982Z"
                        fill="#3C3837"
                    />
                    <g clip-path="url(#clip1_72_4255)">
                        <path
                            d="M85.5405 33.2394C85.7548 33.1858 85.9692 33.2394 86.1567 33.3733C86.8533 33.9628 87.6571 34.445 88.5413 34.7666C89.3718 35.0881 90.2828 35.2488 91.2473 35.2488C93.4176 35.2488 95.4002 34.3647 96.8203 32.9446C98.2403 31.5246 99.1244 29.542 99.1244 27.3717C99.1244 26.4608 98.9637 25.5766 98.6958 24.7728C98.401 23.9155 97.9723 23.1385 97.4097 22.4686C97.1686 22.1739 97.2221 21.7452 97.5169 21.5041C97.7044 21.3701 97.9188 21.3166 98.1331 21.3701C100.41 21.9864 102.393 23.3528 103.813 25.1747C105.18 26.9698 105.983 29.1937 105.983 31.605C105.983 34.5254 104.805 37.1779 102.875 39.107C100.946 41.0361 98.3207 42.215 95.3734 42.215C92.9085 42.215 90.6311 41.3576 88.8092 39.9376C86.9605 38.4908 85.6209 36.4277 85.0582 34.0699C84.951 33.6948 85.1654 33.3197 85.5405 33.2394Z"
                            fill="white"
                        />
                    </g>
                    <path
                        d="M121.79 65.1748H27.2402V75.2068H121.79V65.1748Z"
                        fill="#72A479"
                    />
                    <path
                        d="M69.4932 5.74205L69.4932 128.055H79.6683V5.74205H69.4932Z"
                        fill="#72A479"
                    />
                    <path
                        d="M87.9776 46.0372C88.5828 46.0372 89.0734 45.5535 89.0734 44.9568C89.0734 44.3602 88.5828 43.8765 87.9776 43.8765C87.3724 43.8765 86.8818 44.3602 86.8818 44.9568C86.8818 45.5535 87.3724 46.0372 87.9776 46.0372Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M106.844 45.1889C107.32 45.1889 107.705 44.8089 107.705 44.3401C107.705 43.8713 107.32 43.4912 106.844 43.4912C106.369 43.4912 105.983 43.8713 105.983 44.3401C105.983 44.8089 106.369 45.1889 106.844 45.1889Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M102.991 55.973C103.38 55.973 103.695 55.6621 103.695 55.2785C103.695 54.8949 103.38 54.584 102.991 54.584C102.602 54.584 102.286 54.8949 102.286 55.2785C102.286 55.6621 102.602 55.973 102.991 55.973Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M52.5214 38.4747C52.5214 39.5551 51.6604 40.404 50.5647 40.404C49.4689 40.404 48.6079 39.5551 48.6079 38.4747C48.6079 37.3944 49.4689 36.5455 50.5647 36.5455C51.6604 36.4683 52.5214 37.3944 52.5214 38.4747Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M56.3565 51.2073C56.3565 51.7475 55.9652 52.1333 55.4173 52.1333C54.8694 52.1333 54.478 51.7475 54.478 51.2073C54.478 50.6671 54.8694 50.2812 55.4173 50.2812C55.8869 50.2812 56.3565 50.6671 56.3565 51.2073Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M93.5348 110.319C94.3129 110.319 94.9437 109.697 94.9437 108.93C94.9437 108.162 94.3129 107.541 93.5348 107.541C92.7567 107.541 92.126 108.162 92.126 108.93C92.126 109.697 92.7567 110.319 93.5348 110.319Z"
                        fill="#F7E9D9"
                    />
                    <path
                        d="M37.3371 111.862C38.5474 111.862 39.5286 110.895 39.5286 109.701C39.5286 108.508 38.5474 107.541 37.3371 107.541C36.1267 107.541 35.1455 108.508 35.1455 109.701C35.1455 110.895 36.1267 111.862 37.3371 111.862Z"
                        fill="#F7E9D9"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_72_4255">
                        <rect
                            width="102.299"
                            height="130.647"
                            fill="white"
                            transform="translate(23.4048 0.353027)"
                        />
                    </clipPath>
                    <clipPath id="clip1_72_4255">
                        <rect
                            width="20.9528"
                            height="20.9528"
                            fill="white"
                            transform="matrix(-1 0 0 1 105.983 21.3057)"
                        />
                    </clipPath>
                </defs>
            </svg>
            <CasualBtn>Продовжити оформляти замовлення</CasualBtn>
        </div>
    );
};

export default OrderTimesUp;
