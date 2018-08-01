import { EventStream } from "./observable";
import { Source } from "./internal/source";
import Observable, { ObservableConstructor } from "./observable";
import { Property } from "./observable";
export declare type ObservableOrSource<V> = Observable<V> | Source<any, V>;
export declare type Pattern1<I1, O> = [ObservableOrSource<I1>, (I1: any) => O];
export declare type Pattern2<I1, I2, O> = [ObservableOrSource<I1>, ObservableOrSource<I1>, (I1: any, I2: any) => O];
export declare type Pattern3<I1, I2, I3, O> = [ObservableOrSource<I1>, ObservableOrSource<I1>, ObservableOrSource<I3>, (I1: any, I2: any, I3: any) => O];
export declare type Pattern4<I1, I2, I3, I4, O> = [ObservableOrSource<I1>, ObservableOrSource<I1>, ObservableOrSource<I3>, ObservableOrSource<I4>, (I1: any, I2: any, I3: any, I4: any) => O];
export declare type Pattern5<I1, I2, I3, I4, I5, O> = [ObservableOrSource<I1>, ObservableOrSource<I1>, ObservableOrSource<I3>, ObservableOrSource<I4>, ObservableOrSource<I5>, (I1: any, I2: any, I3: any, I4: any, I5: any) => O];
export declare type Pattern6<I1, I2, I3, I4, I5, I6, O> = [ObservableOrSource<I1>, ObservableOrSource<I1>, ObservableOrSource<I3>, ObservableOrSource<I4>, ObservableOrSource<I5>, ObservableOrSource<I6>, (I1: any, I2: any, I3: any, I4: any, I5: any, I6: any) => O];
/** @hidden */
export declare type RawPattern = [AnyObservableOrSource[], AnyFunction];
export declare type Pattern<O> = Pattern1<any, O> | Pattern2<any, any, O> | Pattern3<any, any, any, O> | Pattern4<any, any, any, any, O> | Pattern5<any, any, any, any, any, O> | Pattern6<any, any, any, any, any, any, O> | RawPattern;
/** @hidden */
export declare type AnySource = Source<any, any>;
/** @hidden */
export declare type AnyFunction = Function;
/** @hidden */
export declare type AnyObservable = Observable<any>;
/** @hidden */
export declare type AnyObservableOrSource = AnyObservable | AnySource;
export declare function when<O>(...patterns: Pattern<O>[]): EventStream<O>;
/** @hidden */
export declare function whenP<O>(...patterns: Pattern<O>[]): Property<O>;
export default when;
/** @hidden */
export declare function when_<O>(ctor: ObservableConstructor, patterns: Pattern<O>[]): Observable<O>;
/** @hidden */
export declare function extractRawPatterns<O>(patterns: Pattern<O>[]): RawPattern[];