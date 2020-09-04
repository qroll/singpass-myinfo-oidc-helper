"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    birthcertno: { value: "S6918368I" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child1MonthOld = {
    birthcertno: { value: "S4110697B" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child2MonthsOld = {
    birthcertno: { value: "S2568375G" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle1 = {
    birthcertno: { value: "S3259158B" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle2 = {
    birthcertno: { value: "S9469006D" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle3 = {
    birthcertno: { value: "S6177127A" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle4 = {
    birthcertno: { value: "S2847477F" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle5 = {
    birthcertno: { value: "S5113215G" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child6YearsOld = {
    birthcertno: { value: "S3081683H" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child7YearsOld = {
    birthcertno: { value: "S0729044F" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childSuperOld = {
    birthcertno: { value: "S9054450J" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.Childrenbirthrecords = {
    childYoungest,
    child1MonthOld,
    child2MonthsOld,
    childMiddle1,
    childMiddle2,
    childMiddle3,
    childMiddle4,
    childMiddle5,
    child6YearsOld,
    child7YearsOld,
    childSuperOld,
};
//# sourceMappingURL=normalChildren.js.map