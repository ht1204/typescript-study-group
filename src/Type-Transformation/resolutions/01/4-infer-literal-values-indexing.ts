import { Equal, Expect } from "../../../../helper";

// 4. infer literal values by indexing 

export const programModeMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
	asd: {
		qwe: 'hello'
	}
} as const;


export type GroupProgram = typeof programModeMap["GROUP"];
export type AnnouncementProgram = typeof programModeMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  typeof programModeMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  typeof programModeMap["PLANNED_SELF_DIRECTED"];

type tests = [
  Expect<Equal<GroupProgram, "group">>,
  Expect<Equal<AnnouncementProgram, "announcement">>,
  Expect<Equal<OneOnOneProgram, "1on1">>,
  Expect<Equal<SelfDirectedProgram, "selfDirected">>,
  Expect<Equal<PlannedOneOnOneProgram, "planned1on1">>,
  Expect<Equal<PlannedSelfDirectedProgram, "plannedSelfDirected">>,
];

const arr: tests = [true, true, true, true, true, true];