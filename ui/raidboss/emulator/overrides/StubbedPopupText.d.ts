import { RaidbossOptions } from '../../raidboss_options';
import { TimelineLoader } from '../../timeline';
import { PopupText } from '../../popup-text';
import { RaidbossFileData } from '../../data/raidboss_manifest.txt';
export default class StubbedPopupText extends PopupText {
    constructor(options: RaidbossOptions, timelineLoader: TimelineLoader, raidbossFileData: RaidbossFileData);
    HookOverlays(): void;
}
//# sourceMappingURL=StubbedPopupText.d.ts.map