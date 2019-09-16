Vue.component('presentations', {
    props: ['presentation'],
    template: `<div class="card">
        <div class="card-header">
            <h4>Presentación</h4>
            <address>
                <p v-if="presentation.address" class="address">
                    <div v-if="presentation.address" class="address-title">Dirección</div>
                    <div v-if="presentation.address" class="address-data">
                        {{ presentation.address }}<br>{{ presentation.town }}
                    </div>
                </p>
                <p v-if="presentation.phone" class="address">
                    <div v-if="presentation.phone" class="address-title">Teléfono</div>
                    <div v-if="presentation.phone" class="address-data">
                        {{ presentation.phone }}
                    </div>
                </p>
                <p v-if="presentation.mobile" class="address">
                    <div v-if="presentation.mobile" class="address-title">Móvil</div>
                    <div v-if="presentation.mobile" class="address-data">
                        {{ presentation.mobile }}
                    </div>
                </p>
                <p v-if="presentation.web" class="address">
                    <div v-if="presentation.web" class="address-title">Web</div>
                    <div v-if="presentation.web" class="address-data">
                        <a :href="presentation.web" target="_blank">{{ presentation.web }}</a>
                    </div>
                </p>
                <hr class="divider">
                <p class="address">
                    <div v-if="presentation.city " class="address-data">
                        <span v-if="presentation.city ">{{ presentation.city }}</span><span v-if="presentation.state ">, {{ presentation.state }}</span>
                    </div>
                    <div class="address-title"><img :src="'https://res.cloudinary.com/dbszizqh4/image/upload/v1562476222/flags/' + presentation.countryId.code + '.png'" :alt="presentation.countryId.name" class="flag"> {{ presentation.countryId.name }}</div>
                </p>
            </address>
        </div>
        <div class="card-body"></div>
        <div class="card-footer"></div>
    </div>`
})