
export type ClassificationType = {
     classificationId:number,
     classificationName:string;
     icon?:React.ReactNode

}


export type GroupingType = {
    groupingId:number;
    groupingName:string;
    classificationId:number;
    link?:string
}