import { Event } from "./event"
import { EventStream } from "./observable";
import { more, Reply } from "./reply";

export type Sink<V> = (value: V) => Reply
export type EventSink<V> = Sink<Event<V>>
export type VoidSink = () => Reply
/** an "unsubscribe" function returned by [subscribe](classes/Observable.html#subscribe) et al. You can cancel your subscription by calling this function.
 */
export type Unsub = () => void
/** @hidden */
export const nullSink: Sink<any> = () => more
/** @hidden */
export const nullVoidSink: VoidSink = () => more
export type Subscribe<T> = (arg: EventSink<T>) => any;
/** @hidden */
export type EventStreamDelay<V> = (stream: EventStream<V>) => EventStream<V>
