"use client";

import {useSyncExternalStore} from "react";

type Listener = () => void;

const state = new Map<string, boolean>();
const listeners = new Set<Listener>();
let cached: Record<string, boolean> = {};
let dirty = true;

function emit() {
	dirty = true;
	for (const listener of listeners) listener();
}

function getSnapshot() {
	if (dirty) {
		cached = Object.fromEntries(state);
		dirty = false;
	}
	return cached;
}

function subscribe(listener: Listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

export function registerInViewKey(key: string) {
	state.set(key, false);
	emit();
	return () => {
		state.delete(key);
		emit();
	};
}

export function setInViewKey(key: string, triggered: boolean) {
	if (state.get(key) === triggered) return;
	state.set(key, triggered);
	emit();
}

export function getInViewState(): Record<string, boolean> {
	return getSnapshot();
}

export function useInViewStore() {
	return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}