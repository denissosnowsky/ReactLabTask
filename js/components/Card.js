export const Card = (name, date, invitation, confirmed) => `
    <div class="doctor-view__patient-board-mainFilled-card">
        <div class="doctor-view__patient-board-mainFilled-card-header">
            <img alt="avatar" src="./icons/avatar.png" />
            <div
                class="
                doctor-view__patient-board-mainFilled-card-header-personInfo
                "
            >
                <span
                class="
                    doctor-view__patient-board-mainFilled-card-header-personInfo-name
                "
                >${name}</span
                >
                <span
                class="
                    doctor-view__patient-board-mainFilled-card-header-personInfo-status
                "
                >${
                  confirmed === "yes"
                    ? '<img alt="status" src="./icons/online.svg"/>'
                    : confirmed === "no"
                    ? '<img alt="status" src="./icons/notOnline.svg"/>'
                    : '<img alt="status" src="./icons/wait.svg"/>'
                }
                <span
                    >${
                      confirmed === "yes"
                        ? "Appointment is confirmed"
                        : confirmed === "no"
                        ? "Appointment is canceled"
                        : "Waiting for confirmation... "
                    }</span
                ></span
                >
            </div>
            <div
                class="
                doctor-view__patient-board-mainFilled-card-header-settings
                "
            >
                <div
                class="
                    doctor-view__patient-board-mainFilled-card-header-settings-circle-wrapper
                "
                >
                <div
                    class="
                    doctor-view__patient-board-mainFilled-card-header-settings-circle
                    "
                ></div>
                <div
                    class="
                    doctor-view__patient-board-mainFilled-card-header-settings-circle
                    "
                ></div>
                <div
                    class="
                    doctor-view__patient-board-mainFilled-card-header-settings-circle
                    "
                ></div>
                </div>
            </div>
        </div>
        <div class="doctor-view__patient-board-mainFilled-card-main">
            <div
                class="doctor-view__patient-board-mainFilled-card-main-time"
            >
                <img alt="time" src="./icons/time.svg" />
                <span
                class="
                    doctor-view__patient-board-mainFilled-card-main-time-text
                "
                >${date}</span
                >
            </div>
            <div
                class="doctor-view__patient-board-mainFilled-card-main-invite"
            >
                <img alt="invite" src="./icons/board.svg" />
                <span
                >${invitation}</span
                >
            </div>
        </div>
    </div>
`;
