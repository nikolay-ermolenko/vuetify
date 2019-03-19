import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
import { DxButton, DxTextBox } from 'devextreme-vue';
import notify from 'devextreme/ui/notify';
import axios from 'axios';
import WithRender from './Edit.html';

@WithRender
@Component({
  components: {
    DxDataGrid,
    DxColumn,
    DxButton,
    DxTextBox,
  },
})
export default class Edit extends Vue {

  public value: boolean = true;

  @Prop({
    required: true,
    validator(id: string) {
      return !isNaN(parseInt(id));
    },
  })
  public id!: number;

  public user: any = null;

  public mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then(({data}) => {
        this.user = data;
      });
  }

  @Watch('value')
  public onValueChanged(value: boolean, oldValue: boolean) {
    if (value === false) {
      this
        .$router.push(this.$route.meta.basePath);
    }
  }

  public get userData(): any {
    return this.user === null
      ? {}
      : this.user;
  }

}
