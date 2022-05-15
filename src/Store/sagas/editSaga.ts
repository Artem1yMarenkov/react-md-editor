import { put, debounce } from 'redux-saga/effects';
import { setMarkdown } from '../slices/editSlice';

function* writeMarkdown(action: any) {
    yield put(setMarkdown(action.payload));
}

export default function* updateMarkdownAsync() {
    yield debounce(500, 'edit/setMarkdownAsync', writeMarkdown);
}