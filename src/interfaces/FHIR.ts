export interface Serializable<T> {
    deserialize(input: object): T;
}

/* This is base class from which other elements are derived */
export class FHIRElement {
    id: string;
    extension: Extension[];
}

export class BackboneElement extends FHIRElement {
    modifierExtension: any;
}

export class Coding extends FHIRElement {
    system: string;
    version: string;
    code: string;
    display: string;
    userSelected: boolean;

    deserialize(jsonObject: any): Coding {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }

}
export class ContactPoint {
    system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms';
    value?: string;
    use?: 'home' | 'work' | 'temp' | 'old' |'mobile';
    rank?: number;
    period?: Period;
}

export declare class ContactDetail extends FHIRElement {
    name: string;
    telecom: ContactPoint;
}

export class Extension {
    url: string;
    valueString: string;
    valueCode: string;
    valueAddress: Address;
    valueBoolean?: boolean;
    valueReference: Reference;
    valueIdentifier: string;
    valueDecimal?: number;
    extension: Extension[];
}

export class Address extends FHIRElement {
    use: string;
    type: string;
    text: string;
    line: string[];
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    period: Period;

}

export declare class Code extends FHIRElement {
    private code;
    private codeRE;
    constructor(input?: string);
    private setCode;
    getcode(): string;
    setcode(input: string): void;
    toString(): string;
    deserialize(jsonObject: any): Code;
}

export class CodeableConcept extends FHIRElement {
    coding: Coding[];
    text: string;
}

export class Period extends FHIRElement {
    start: string;
    end: string;
}

export class Quantity extends FHIRElement {
    value: number;
    comparator: string;
    unit: string;
    system: string;
    code: string;
}

export class FHIRRange extends FHIRElement {
    low: number;
    high: number;
}

export class Reference extends FHIRElement {
    reference: string;
    identifier: Identifier;
    display: string;
}

export class Identifier extends FHIRElement {
    use: string;
    type: CodeableConcept;
    system: string;
    value: string;
    period: Period;
    assigner: Reference;
}

export class Id {
    private id: string;

    constructor(input?: string) {
        const re = new RegExp('[A-Za-z0-9\\-\\.]{1,64}');

        if (re.test(input)) {
            this.id = input;
        } else {
            throw new RangeError('Not a valid Id string - must match reg exp [A-Za-z0-9\\-\\.]{1,64} Was provided: ' + input);
        }
    }
}

export class Meta extends FHIRElement {
    versionId: Id;
    lastUpdated: string;
    profile: string;
    security: Coding;
    tag: Coding;

    deserialize(jsonObject: any): Meta {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export declare class FHIROption extends BackboneElement {
    value: any;
    setvalueDate(value: string): void;
    setvalueTime(value: string): void;
    setvalueString(value: string): void;
    setvalueCoding(value: Coding): void;
}

/* This is the base FHIR Resource from which others are derived */
export class Resource {
    resourceType: string;
    id: string;
    meta: Meta;
    implicitRules: string;
    language: string;
    extension: Extension[];
}

export class Questionnaire extends Resource implements Serializable<Questionnaire> {
    url: string;
    identifier: Identifier[];
    version: string;
    name: string;
    title: string;
    status: string;
    experimental: boolean;
    date: string;
    publisher: string;
    description: string;
    purpose: string;
    approvalDate: string;
    lastReviewedDate: string;
    effectivePeriod: Period;
    useContext: UsageContext[];
    jurisdiction: CodeableConcept[];
    contact: ContactDetail[];
    copyright: string;
    code: Coding[];
    subjectType: string[];
    item: Item[];

    deserialize(jsonObject: any): Questionnaire {
      const that = this;
      Object.entries(jsonObject).forEach((value) => {
        if (!(typeof value[1] === 'object')) {
          that[value[0]] = value[1];
        } else {
          (that[value[0]].deserialize(value[1]));
        }
      });
      return this;
    }
}

export class Item extends BackboneElement {
    linkId: string;
    definition: string;
    code: Coding[];
    prefix: string;
    text: string;
    type: string;
    subject: Reference;
    enableWhen: EnableWhen[];
    // This is a new element added from R4
    // This element must be specified if more than one enableWhen value is provided.
    // Possible values: all | any
    enableBehavior: string;
    required: boolean;
    repeats: boolean;
    readOnly: boolean;
    maxLength: number;
    answerValueSet: string;
    answerOption: AnswerOption[];
    item: Item[];
    initial: any[];
    answer: Answer[];
    initialReference: Reference;
    initialDateTime: Date;
  }

export declare class QuestionnaireResponseItem extends BackboneElement {
    linkId: string;
    definition?: string;
    text: string;
    answer: Answer[];
}

export class Answer extends BackboneElement {
    valueDecimal?: number;
    valueInteger?: number;
    valueDate?: Date;
    valueDateTime?: Date;
    valueTime?: string;
    valueString?: string;
    valueUri?: string;
    valueAttachment?: Attachment;
    valueCoding?: Coding;
    valueQuantity?: Quantity;
    valueBoolean?: boolean;
    valueReference?: Reference;
  }

export class AnswerOption extends BackboneElement {
    value: any;
    setvalueDate(value: string) {
      this.value = value;
    }
    setvalueTime(value: string) {
      this.value = value;
    }
    setvalueString(value: string) {
      this.value = value;
    }
    setvalueCoding(value: Coding) {
      this.value = value;
    }
    setValueReference(value: Reference) {
        this.value = value;
    }
  }

export declare class QuestionnaireResponse extends Resource implements Serializable<QuestionnaireResponse> {
    identifier: Identifier;
    basedOn: Reference[];
    parent: Reference[];
    questionnaire: Reference;
    status: string;
    context: Reference;
    authored: Date;
    author: Reference;
    source: Reference;
    item: QuestionnaireResponseItem[];
    subject: Reference;
    deserialize(jsonObject: any): QuestionnaireResponse;
}

export declare class UsageContext extends FHIRElement {
    code: Coding;
    value: any;
    setvalueCodeableConcept(value: CodeableConcept): void;
    setvalueQuantity(value: Quantity): void;
    setvalueRange(value: Range): void;
}

export class EnableWhen extends BackboneElement {
    question: string;
    // Starting from R4, answer is a required element, meaning it has a minimum cardinality of 1
    answer: any;
    // This is a new, mandatory element starting from R4
    // accepted values are: exists | = | != | > | < | >= | <=
    operator: string;

    setanswerBoolean(answer: boolean) {
      this.answer = answer;
    }
    setanswerInteger(answer: number) {
      this.answer = answer;
    }
    setanswerDate(answer: string) {
      this.answer = answer;
    }
    setanswerdateTime(answer: string) {
      this.answer = answer;
    }
    setanswerTime(answer: string) {
      this.answer = answer;
    }
    setanswerUri(answer: string) {
      this.answer = answer;
    }
    setanswerAttachment(answer: any) {
      this.answer = answer;
    }
    setanswerCoding(answer: Coding) {
      this.answer = answer;
    }
    setanswerQuantity(answer: Quantity) {
      this.answer = answer;
    }
    setanswerReference(answer: string) {
      this.answer = answer;
    }

  }

export class Annotation extends FHIRElement {
    authorReference: Reference;
    authorString: string;
    time: Date;
    text: string;
}

export class Condition extends Resource implements Serializable<Condition> {
    identifier: Identifier[];
    subject: Reference;
    note: Annotation[];
    dateRecorded: string;

    deserialize(jsonObject: any): Condition {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }

}

export class Observation extends Resource implements Serializable<Observation> {
    identifier: Identifier[];
    subject: Reference;
    component: ObservationComponent[];
    note: Annotation[];

    deserialize(jsonObject: any): Observation {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class Group extends Resource implements Serializable<Group> {
    identifier: Reference[];
    active: boolean;
    type: string;
    actual: boolean;
    code: CodeableConcept;
    name: string;
    quantity: number;
    characteristic: GroupCharacteristic[];
    member: GroupMember[];

    deserialize(jsonObject: any): Group {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class GroupCharacteristic extends BackboneElement {
    code: CodeableConcept;
    valueCodeableConcept: CodeableConcept;
    exclude: boolean;
    period: Period;
}

export class GroupMember extends BackboneElement {
    entity: Reference;
    period: Period;
    inactive: boolean;
}

export class ObservationComponent extends FHIRElement {
    code: CodeableConcept;
    valueString: string;
    valueBoolean: boolean;
}

export class CarePlan extends Resource implements Serializable<CarePlan> {
    identifier: Identifier[];
    basedOn: Reference[];
    replaces: Reference[];
    partOf: Reference[];
    status: string;
    intent: string;
    category: CodeableConcept[];
    title: string;
    description: string;
    subject: Reference;
    period: Period;
    created: string;
    author: Reference;
    contributor: Reference[];
    careTeam: Reference[];
    addresses: Reference[];
    supportingInfo: Reference[];
    goal: Reference[];
    activity: CarePlanActivity[];
    note: Annotation[];


    deserialize(jsonObject: any): CarePlan {
        const that = this;
        Object.entries(jsonObject).forEach(value => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class CarePlanActivity extends BackboneElement {
    outcomeCodeableConcept: CodeableConcept[];
    outcomeReference: Reference[];
    progress: Annotation[];
    reference: Reference;
    detail: CarePlanActivityDetail;
}

export class CarePlanActivityDetail extends BackboneElement {
    kind: string;
    code: string;
    reasonReference: Reference;
    goal: Reference[];
    status: string;
    doNotPerform: boolean;
    performer: Reference[];
    description: string;
}

export class CareTeam extends Resource implements Serializable<CareTeam> {
    identifier: Identifier[];
    status: string;
    category: CodeableConcept[];
    name: string;
    subject: Reference;
    participant: CareTeamParticipant[];
    note: Annotation[];

    deserialize(jsonObject: any): CareTeam {
        const that = this;
        Object.entries(jsonObject).forEach(value => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class CareTeamParticipant extends BackboneElement {
    role: CodeableConcept[];
    member: Reference;
    onBehalfOf: Reference;
    period: Period;
}

export class ChargeItem extends Resource implements Serializable<ChargeItem> {
    identifier: Identifier[];
    status: string;
    subject: Reference;
    context: Reference;
    quantity: Quantity;
    factorOverride: number;
    priceOverride: Money;
    reason: CodeableConcept[];
    service: Reference[];
    productCodeableConcept: CodeableConcept;
    note: Annotation[];

    deserialize(jsonObject: any): ChargeItem {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class Money extends BackboneElement {
    value: number;
    currency: string;
}

export class SupplyDelivery extends Resource implements Serializable<SupplyDelivery> {
    identifier: Identifier[];
    basedOn: Reference[];
    partOf: Reference[];
    status: string;
    patient: Reference;
    type: CodeableConcept;
    suppliedItem: SuppliedItem;

    deserialize(jsonObject: any): SupplyDelivery {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class SuppliedItem extends BackboneElement {
    quantity: Quantity;
    itemCodeableConcept: CodeableConcept;
    itemReference: Reference;
}

export class Communication extends Resource implements Serializable<Communication> {
    identifier: Identifier[];
    status: string;
    sent: Date;
    sender: Reference;
    payload: Payload[];
    partOf: Reference;

    deserialize(jsonObject: any): Communication {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class Payload extends BackboneElement {
    contentString: string;
    contentAttachment: Attachment;
    contentReference: Reference;
}


export class DocumentReference extends Resource implements Serializable<DocumentReference> {
    identifier: Identifier[];
    masterIdentifier: Identifier;
    status: string;
    docStatus: string;
    type: CodeableConcept;
    subject: Reference;
    created: Date;
    description: string;
    author: Reference[];
    content: Content[];
    indexed: Date;
    context: Context;
    deserialize(jsonObject: any): DocumentReference {
        const that = this;
        Object.entries(jsonObject).forEach((value) => {
            if (!(typeof value[1] === 'object')) {
                that[value[0]] = value[1];
            } else {
                (that[value[0]].deserialize(value[1]));
            }
        });
        return this;
    }
}

export class Content extends BackboneElement {
    attachment: Attachment;
    format: Coding;
}

export class Attachment extends FHIRElement {
    contentType: string;
    language: string;
    data: string;
    url: string;
    size: number;
    hash: string;
    title: string;
    creation: string;
}

export class Context extends BackboneElement {
    encounter: Reference;
    event: CodeableConcept[];
    sourcePatientInfo: Reference;
    related: ContextRelated[];
}

export class ContextRelated extends BackboneElement {
    identifier: Identifier;
    ref: Reference[];
}

