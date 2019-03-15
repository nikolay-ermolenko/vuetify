import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import WithRender from './Card.html';

@WithRender
@Component
export default class Card extends Vue {

  public get value() {
    return this.id;
  };

  @Prop({
    required: true,
    validator(id: string) {
      return !isNaN(parseInt(id));
    },
  })
  public id!: number;

  @Watch('value')
  public aaa() {
    console.log(2222222);
  }
}
