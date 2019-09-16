Vue.component('skyscraper', {
    props: ['sky'],
    template: `<section id="skyscraper" class="skyscraper">
        <div v-if="sky._extras.image" class="skyscraper-image">
            <img :src="sky._extras.image" :alt="sky.title">
        </div>
        <div v-if="!sky._extras.image" class="skyscraper-image">
            <img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562472720/default.jpg" :alt="sky.title">
        </div>
        <img v-if="sky.image" :src="sky.image" :alt="sky.slug" class="avatar-big">
        <img v-if="!sky.image" src="https://res.cloudinary.com/dbszizqh4/image/upload/v1562473096/logo_default.png" :alt="sky.slug" class="avatar-big">
        <div class="skyscraper-info">
            <h1>{{ sky.title }}</h1>
            <p>{{ sky.description }}</p>
            <div class="card-footer">
                <div class="card-footer-social"><i class="fas fa-clipboard"></i> {{ sky.posts.length }}</div>
                <div class="card-footer-social"><i class="fas fa-user-friends"></i> {{ sky._followers.length }}</div>
                <div class="card-footer-social"><i class="fas fa-eye"></i> {{ sky.views }}</div>
            </div>
        </div>
    </section>`
})