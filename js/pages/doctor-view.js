export const doctorView = `
  <section class="doctor-view">
    <header class="doctor-view__header">
      <div class="doctor-view__header-brand-logo">
        <img alt="logo" src="./images//logo.png" />
      </div>
      <div class="doctor-view__header-user-logo">
        <div class="doctor-view__header-user-logo-text">
          <span>Miranda Nelson</span>
          <span>Doctor</span>
        </div>
        <div class="doctor-view__header-user-logo-image">
          <img alt="userLogo" src="./icons/avatar.png" />
        </div>
      </div>
    </header>
    <main>
      <section class="doctor-view__patient-board">
        <nav class="doctor-view__patient-board-nav">
          <button>Patients</button>
          <button>Resolutions</button>
        </nav>
        <header class="doctor-view__patient-board-header">
          <span class="doctor-view__patient-board-header-text"
            >My Patients</span
          >
          <div class="doctor-view__patient-board-header-searchWrapper">
            <img
              alr="search"
              src="./icons/search.svg"
              class="doctor-view__patient-board-header-searchWrapper-img"
            />
            <input type="text" placeholder="Search" />
            <span class="doctor-view__patient-board-header-searchWrapper-span"
              >Sort by:</span
            >
            <div class="doctor-view__patient-board-header-selector">
              <span>Date</span>
              <div class="doctor-view__patient-board-header-selector-arrow">
                <img alt="arrow" src="./icons/searchArrowDown.svg" />
              </div>
            </div>
            <img
              alr="search"
              src="./icons/settingTab.svg"
              class="doctor-view__patient-board-header-searchWrapper-imgTab"
            />
          </div>
        </header>
        <div class="doctor-view__patient-board-mainEmpty">
          <div class="doctor-view__patient-board-mainEmpty-info">
            <img alt="noClients" src="./icons/medicalHistory.svg"/>
            <span class="doctor-view__patient-board-mainEmpty-info-text">You have no patients yet.</br>To create a patient profile, please contact your administrator.</span>
          </div>
        </div>
      </section>
    </main>
  </section>
`;
