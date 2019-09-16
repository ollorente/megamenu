Vue.component('posts', {
    props: ['post'],
    template: `<div class="card shadow">
        <div class="card-header">
            <div v-if="post.pageId.image" class="card-header-avatar">
                <img :src="post.pageId.image" :alt="post.pageId.text" class="avatar">
            </div>
            <div class="card-header-description">
                <h2>{{ post.pageId.title }}</h2>
                <p>@{{ post.pageId.slug }}<br/><i class="far fa-clock"></i> {{ post.createdAt }}</p>
            </div>
        </div>
        <div class="card-body">
            <div v-if="post.image" class="card-image"><img :src="post.image" :alt="post.text"></div>
            <div v-if="post.video" class="card-video"><iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + post.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div v-if="post.text" class="card-text">{{ post.text }}</div>
        </div>
        <div class="card-footer">
            <div class="card-footer-social"><i class="fas fa-heart"></i> {{ post._likes.length }}</div>
            <div class="card-footer-social"><i class="fas fa-comment"></i> {{ post._comments.length }}</div>
            <div class="card-footer-social"><i class="fas fa-eye"></i> {{ post.views }}</div>
        </div>

        <div class="comment-display">

            <form action="" class="form">
                <input type="text" class="form-input" placeholder="Danos tu opinión..." :data-comment="post._id">
            </form>

            <div
                v-for="comment in post._comments"
                v-bind:comment="post"
                v-bind:key="post._comments._id"
                class="card mb-3 bg-none"
            >
                <div class="card-header">
                    <a :href="'/u/' + comment.userId.username + '/'">
                        <div class="card-header-avatar">
                            <img :src="'https://www.gravatar.com/avatar/' + comment.userId.gravatar + '?s=64&r=pg&d=404'" :alt="'comment.userId.firstName' + comment.userId.lastName" class="avatar">
                        </div>
                    </a>
                    <div class="card-header-description">
                        <h5><a :href="'/u/' + comment.userId.username + '/'">+{{ comment.userId.firstName }} {{ comment.userId.lastName }}</a></h5>
                        <p>{{ comment.text }}</p>
                        <p><i class="far fa-clock"></i> {{ comment.createdAt }}</p>
                    </div>
                </div>
            </div>
        </div>


    </div>`
})