
import { splitTitle } from "./utils";

export const dotGrid = (title: string, subtitle: string) => {
    const titleLines = splitTitle(title);
    const subtitleLines = splitTitle(subtitle);

    return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#070707" />
        <g clip-path="url(#clip0_4439_33118)">
            <rect width="4" height="4" transform="translate(370 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 573) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 556.351) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 539.703) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 523.054) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 506.405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 489.757) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 473.108) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 456.459) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 439.811) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 423.162) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 406.514) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 389.865) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 373.216) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 356.568) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 339.919) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 323.27) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 306.622) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 289.973) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.298 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 273.324) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 256.676) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 240.027) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 223.378) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.297 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 206.73) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 190.081) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 173.432) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.297 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 156.784) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(305.784 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.297 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 140.135) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 123.486) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(337.892 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 106.838) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(370 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(321.838 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(161.297 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(113.135 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(64.9727 90.1891) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(353.946 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(257.622 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(209.459 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(145.243 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(97.0811 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(48.9189 73.5405) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(289.729 56.8918) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(241.567 56.8918) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(193.405 56.8918) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(81.0273 56.8918) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 56.8918) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(273.676 40.2433) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(225.514 40.2433) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(177.352 40.2433) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(129.189 40.2433) rotate(180)" fill="#E5E5E5" />
            <rect width="4" height="4" transform="translate(32.8652 40.2433) rotate(180)" fill="#E5E5E5" />
        </g>
        <path
            d="M222.865 133.656L127.235 213.311C122.651 217.13 120 222.787 120 228.753L120 481.904C120 493.003 128.998 502 140.097 502L1059.9 502C1071 502 1080 493.003 1080 481.904V149.099C1080 138 1071 129.002 1059.9 129.002L235.727 129.001C231.027 129.001 226.476 130.648 222.865 133.656Z"
            fill="#070707" stroke="#EDE8E8" stroke-width="2" />
        
            <text x="172" y="229" fill="#EDE8E8"
            width="267"
            height="72"
            font-family="Sora"
            font-weight="400"
            font-style="normal"
            font-size="17"
            letter-spacing="-0.6084"
            text-anchor="start"
            dominant-baseline="middle">
            ${subtitleLines
              .map(
                (line, index) =>
                  `<tspan x="172" dy="${
                    index === 0 ? "0" : "1.2em"
                  }">${line}</tspan>`
              )
              .join("\n            ")}
        </text>

        <text x="172" y="328" fill="#EDE8E8"
            width="823.2"
            height="146"
            font-family="Sora"
            font-weight="400"
            font-style="normal"
            font-size="72.52"
            letter-spacing="-2.1756"
            text-anchor="start"
            dominant-baseline="middle">
            ${titleLines
              .map(
                (line, index) =>
                  `<tspan x="172" dy="${
                    index === 0 ? "0" : "1em"
                  }">${line}</tspan>`
              )
              .join("\n            ")}
        </text>

        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1098.74 35L1080.5 50.3565L1080 52.9999H1082.63L1096.76 41.1104L1094.48 52.9999H1097.93L1101.37 35H1098.74Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1104.82 35L1104.17 38.4009H1116.08L1101.88 50.3498L1101.37 52.9999H1119.3L1119.95 49.5989H1108.05L1122.24 37.6474L1122.75 35H1104.82Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1126.13 35L1122.75 52.9999H1126.12L1129.5 35H1126.13Z" fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1132.95 35L1129.5 52.9999H1147.43L1150.87 35H1132.95ZM1135.75 38.4007H1146.77L1144.62 49.5989H1133.6L1135.75 38.4007Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1168.8 35L1167.27 42.985L1170.06 46.4462L1172.25 35H1168.8ZM1154.32 35L1150.87 52.9999H1154.32L1156.69 40.6603L1166.65 52.9999H1168.8L1169.23 50.7963L1156.48 35H1154.32Z"
            fill="#EDE8E8" />
        <path
            d="M1030.77 231.026L1007.38 213.881V196.273L1030.77 179.129L1040 195.501L1021.23 203.224V206.931L1040 214.499L1030.77 231.026ZM1008.77 166L1005.69 194.883L990.462 203.687L964 191.949L973.538 175.885L989.538 188.242L992.769 186.388L990 166.309L1008.77 166ZM964 218.051L990.462 206.313L1005.69 215.117L1008.77 244L990 243.846L992.769 223.766L989.538 221.913L973.692 234.269L964 218.051Z"
            fill="#FE601F" />
        <defs>
            <clipPath id="clip0_4439_33118">
                <rect width="358" height="555" fill="white" transform="translate(382 592) rotate(180)" />
            </clipPath>
        </defs>
    </svg>
        
    `;
};