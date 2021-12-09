<template>
    <main>
        <v-item-group active-class="primary">
            <v-container>
                <div class="text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize">{{bookTitle}}</span></div>
                <v-row>
                    <v-col cols="12" md="4" class="pa-0">
                                <div>
                                    <v-text-field
                                    v-model="user.firstName"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.lastName"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.username"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.email"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.phoneNumber"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.occupation"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="user.address"
                                    disabled
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                            </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
    middleware: ['auth', 'isUser'],
    data(){
        return {
            bookTitle: 'Your Profile'
        }
    },
    computed: {
        ...mapGetters({
        }),
    },
    methods: {
    },
    mounted(){
    }
}
</script>
<style scoped>
a{
    text-decoration: none !important;
}
.table-width{
    width: 100% !important;
    background: red !important;
}
</style>