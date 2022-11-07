import classNames from "classnames";
import { FC, MouseEventHandler } from "react";
import {
    IDrinks,
    ISoup,
    IAlcohols,
    IBeer,
    IHotDish,
    ISnack,
} from "../../../InterfacesTypes/GoodsInterface";
import s from "./RemoveAddBtn.module.scss";

interface RemoveAddBtn {
    type: "add" | "remove";
    callBack: () => void;
}

const RemoveAddBtn: FC<RemoveAddBtn> = ({ type, callBack }) => {
    if (type === "add") {
        return (
            <button className={s.btn} onClick={callBack}>
                <span className={s.text}>Корзина</span>

                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.1246 18.5268L16.7049 5.30012C16.6813 5.08717 16.492 4.92154 16.279 4.92154H13.6526V4.11706C13.6526 1.84558 11.807 0 9.53556 0C7.26408 0 5.4185 1.84558 5.4185 4.11706V4.92154H2.72112C2.50817 4.92154 2.31888 5.08717 2.29522 5.30012L0.87554 18.5268C0.851878 18.6451 0.899201 18.7634 0.970185 18.858C1.04117 18.9527 1.15948 19 1.27778 19H17.7224C17.8407 19 17.959 18.9527 18.03 18.858C18.1009 18.7634 18.1483 18.6451 18.1246 18.5268ZM13.2267 7.31133C13.4397 7.31133 13.6053 7.47696 13.6053 7.68991C13.6053 7.90286 13.4397 8.06849 13.2267 8.06849C13.0138 8.06849 12.8481 7.90286 12.8481 7.68991C12.8481 7.47696 13.0138 7.31133 13.2267 7.31133ZM6.27031 4.11706C6.27031 2.3188 7.73731 0.851806 9.53556 0.851806C11.3338 0.851806 12.8008 2.3188 12.8008 4.11706V4.92154H6.27031V4.11706ZM5.84441 7.31133C6.05736 7.31133 6.22299 7.47696 6.22299 7.68991C6.22299 7.90286 6.05736 8.06849 5.84441 8.06849C5.63146 8.06849 5.46583 7.90286 5.46583 7.68991C5.46583 7.47696 5.63146 7.31133 5.84441 7.31133ZM1.77467 18.1245L3.0997 5.74969H5.4185V6.53051C4.94528 6.69614 4.61402 7.1457 4.61402 7.66625C4.61402 8.32877 5.15823 8.87298 5.82075 8.87298C6.48326 8.87298 7.02747 8.32877 7.02747 7.66625C7.02747 7.1457 6.69621 6.69614 6.22299 6.53051V5.74969H12.7535V6.53051C12.2803 6.69614 11.949 7.1457 11.949 7.66625C11.949 8.32877 12.4932 8.87298 13.1557 8.87298C13.8183 8.87298 14.3625 8.32877 14.3625 7.66625C14.3625 7.1457 14.0312 6.69614 13.558 6.53051V5.74969H15.9714L17.2965 18.1245H1.77467Z"
                        fill="white"
                    />
                </svg>
            </button>
        );
    }
    return (
        <button className={classNames(s.btn, s.btnRemove)} onClick={callBack}>
            <span className={s.text}>Забрати</span>
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.1246 18.5268L16.7049 5.30012C16.6813 5.08717 16.492 4.92154 16.279 4.92154H13.6526V4.11706C13.6526 1.84558 11.807 0 9.53556 0C7.26408 0 5.4185 1.84558 5.4185 4.11706V4.92154H2.72112C2.50817 4.92154 2.31888 5.08717 2.29522 5.30012L0.87554 18.5268C0.851878 18.6451 0.899201 18.7634 0.970185 18.858C1.04117 18.9527 1.15948 19 1.27778 19H17.7224C17.8407 19 17.959 18.9527 18.03 18.858C18.1009 18.7634 18.1483 18.6451 18.1246 18.5268ZM13.2267 7.31133C13.4397 7.31133 13.6053 7.47696 13.6053 7.68991C13.6053 7.90286 13.4397 8.06849 13.2267 8.06849C13.0138 8.06849 12.8481 7.90286 12.8481 7.68991C12.8481 7.47696 13.0138 7.31133 13.2267 7.31133ZM6.27031 4.11706C6.27031 2.3188 7.73731 0.851806 9.53556 0.851806C11.3338 0.851806 12.8008 2.3188 12.8008 4.11706V4.92154H6.27031V4.11706ZM5.84441 7.31133C6.05736 7.31133 6.22299 7.47696 6.22299 7.68991C6.22299 7.90286 6.05736 8.06849 5.84441 8.06849C5.63146 8.06849 5.46583 7.90286 5.46583 7.68991C5.46583 7.47696 5.63146 7.31133 5.84441 7.31133ZM1.77467 18.1245L3.0997 5.74969H5.4185V6.53051C4.94528 6.69614 4.61402 7.1457 4.61402 7.66625C4.61402 8.32877 5.15823 8.87298 5.82075 8.87298C6.48326 8.87298 7.02747 8.32877 7.02747 7.66625C7.02747 7.1457 6.69621 6.69614 6.22299 6.53051V5.74969H12.7535V6.53051C12.2803 6.69614 11.949 7.1457 11.949 7.66625C11.949 8.32877 12.4932 8.87298 13.1557 8.87298C13.8183 8.87298 14.3625 8.32877 14.3625 7.66625C14.3625 7.1457 14.0312 6.69614 13.558 6.53051V5.74969H15.9714L17.2965 18.1245H1.77467Z"
                    fill="white"
                />
            </svg>
        </button>
    );
};

export default RemoveAddBtn;