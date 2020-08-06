"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const id = "F5994458N";
const name = fake_profile_1.ProfileArchetype.MR_MY_DADDY_PERFECT;
exports.mrMYDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "M";
        profile.sex.desc = map_1.sex.map.codeToDesc[profile.residentialstatus.code];
        profile.nationality.code = "MY";
        profile.birthcountry.code = "MY";
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.passportnumber.value = "A00000000";
        return profile;
    },
};
//# sourceMappingURL=mrMYDaddyPerfect.js.map