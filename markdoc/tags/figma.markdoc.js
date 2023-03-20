import { Figma } from '../../components/Figma';

export default {
  render: Figma,
  attributes: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '50%'
    }
  }
};
