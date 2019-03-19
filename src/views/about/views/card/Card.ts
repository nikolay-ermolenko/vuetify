import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import WithRender from './Card.html';

@WithRender
@Component
export default class Card extends Vue {

  public value: boolean = true;

  @Prop({
    required: true,
    validator(id: string) {
      return !isNaN(parseInt(id));
    },
  })
  public id!: number;

  @Watch('value')
  public onValueChanged(value: boolean, oldValue: boolean) {
    if (value === false) {
      this
        .$router.push(this.$route.meta.basePath);
    }
  }
}
