new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

new Vue({
    el: '#app2',
    data: {
        url: 'https://5xruby.tw/',
        imgUrl: 'http://placekitten.com/g/50/50',
        customId: 'vue',
    }
});

var vm = new Vue({
    el: '#app3',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {

            // `this` inside methods point to the Vue instance
            alert('Hello ' + this.name + '!');

            // `event` is the native DOM event
            alert(event.target.tagName);
        }
    }
});
//vm.greet();

new Vue({
    el: '#app4',
    data: {
        isBlue: true,
        largeFont: 'big-size',
        pinkBackground: 'pink-bg',

        styleObject1: {
            color: 'red',
            fontSize: '20px',
            marginBottom: '10px'
        },
        styleObject2: {
            backgroundColor: 'cyan',
            lineHeight: '2em'
        }
    },

});

new Vue({
    el: '#app5',
    data: {
        cond: true
    }
});

new Vue({
    el: '#app6',
    data: {
        flag: true
    },
    methods: {
        toggle: function() {
            this.flag = !this.flag;
        }
    }
});

new Vue({
    el: '#app7',
    data: {
        flag: true
    },
    methods: {
        toggle: function() {
            this.flag = !this.flag;
        },
        /* ENTER */
        enter: function(el, done) {
            $(el).slideDown();
            done();
        },
        /* LEAVE */
        leave: function(el, done) {
            $(el).slideUp();
            done();
        }
    }
});

new Vue({
    el: '#app8',
    data: {
        rows: []
    },
    mounted: function() {
        $.get('http://beta.json-generator.com/api/json/get/EJzZkeuW7')
            .then((res) => { this.rows = res; });
    }
})

new Vue({
    el: '#app9',
    data: {
        date: null
    },
    components: {
        'date-picker': {
            template: '<input/>',
            props: ['dateFormat'],
            mounted: function() {
                var self = this;
                $(this.$el).datepicker({
                    dateFormat: this.dateFormat,
                    onSelect: function(date) {
                        self.$emit('update-date', date);
                    }
                });
            },
            beforeDestroy: function() {
                $(this.$el).datepicker('hide').datepicker('destroy');
            }
        }
    },
    methods: {
        updateDate: function(date) {
            this.date = date;
        }
    }
});

new Vue({
    el: '.form-input',
    data: {
        message: ''
    }
});

new Vue({
    el: '.form-chkbox',
    data: {
        checked: false
    }
});

new Vue({
    el: '.form-chkboxes',
    data: {
        checkedNames: ['Jack']
    }
});

new Vue({
    el: '.form-radio',
    data: {
        picked: ''
    }
});

new Vue({
    el: '.form-select',
    data: {
        selected: 'C'
    }
});

new Vue({
    el: '#form',
    data: {
        person: {
            name: '',
            passwd: '',
            passwd2: '',
            gender: '請選擇性別',
            hobby: []
        }
    }
})

// reference
console.info('https://speakerdeck.com/kurotanshi/you-jquery-zhuan-vuejs-de-zheng-que-zi-shi');