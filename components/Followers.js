Vue.component('followers', {
    props: ['follow'],
    template: `<a :href="'/u/' + follow.userId.username"><img :src="'https://www.gravatar.com/avatar/' + follow.userId.gravatar + '?s=64&d=mp'" :alt="'+' + follow.userId.username" :title="'+' + follow.userId.username" class="avatar-follow"></a>`
})