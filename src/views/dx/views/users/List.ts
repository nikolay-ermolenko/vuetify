import { Component, Vue } from 'vue-property-decorator';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
import { DxButton } from 'devextreme-vue';
import axios from 'axios';
import WithRender from './List.html';
import VueRouter from 'vue-router';

@WithRender
@Component({
  components: {
    DxDataGrid,
    DxColumn,
    DxButton,
  },
})
export default class List extends Vue {

  public users: any = [];

  public columns: string[] = ['name', 'email', 'phone', 'website', 'company.name'];

  public mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => {
        this
          .users = data;
      });
  }

  public onSelectionChanged() {

  }

  public onButtonClick({data}: any, action: string): void {
    if (action === 'card') {
      this
        .$router.push(`${this.$route.meta.basePath}/users/${data.id}`);
    }
    if (action === 'edit') {
      this
        .$router.push(`${this.$route.meta.basePath}/users/${data.id}/edit`);
    }
  }
}
