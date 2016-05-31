/**
 * Created by denvey on 16/1/18.
 */
const INPUT_FOCUSED = 'INPUT_FOCUSED';
const INPUT_BLURRED = 'INPUT_BLURRED';
const INPUT_CHANGED = 'INPUT_CHANGED';
const UPDATE_FOCUSED_COMPLETE = 'UPDATE_FOCUSED_COMPLETE';
const REVEAL_COMPLETE = 'REVEAL_COMPLETE';
const CLOSE_COMPLETE = 'CLOSE_COMPLETE';

export function inputFocused(shouldRenderComplete) {
    return {
        type: INPUT_FOCUSED,
        shouldRenderComplete
    }
}

export function inputBlurred() {
    return {
        type: INPUT_BLURRED
    }
}

export function inputChanged(shouldRenderComplete, lastAction) {
    return {
        type: INPUT_CHANGED,
        shouldRenderComplete,
        lastAction
    }
}

export function updateFocusedComplete(sectionIndex, completeIndex, value) {
    return {
        type: UPDATE_FOCUSED_COMPLETE,
        sectionIndex,
        completeIndex,
        value
    }
}

export function revealComplete() {
    return {
        type: REVEAL_COMPLETE
    }
}

export function closeComplete(lastAction) {
    return {
        type: CLOSE_COMPLETE,
        lastAction
    }
}

export default function reducer(state, action) {
    switch (action.type) {
        case INPUT_FOCUSED:
            return {
                ...state,
                isFocused: true,
                isCollapsed: !action.shouldRenderComplete
            };

        case INPUT_BLURRED:
            return {
                ...state,
                isFocused: false,
                focusedSectionIndex: null,
                focusedCompleteIndex: null,
                valueBeforeUpDown: null,
                isCollapsed: true
            };

        case INPUT_CHANGED:
            return {
                ...state,
                focusedSectionIndex:null,
                focusedCompleteIndex: null,
                valueBeforeUpDown: null,
                isCollapsed: !action.shouldRenderComplete,
                lastAction: action.lastAction
            };

        case UPDATE_FOCUSED_COMPLETE:
            const { value, sectionIndex, completeIndex } = action;
            const valueBeforeUpDown =
                state.valueBeforeUpDown === null && typeof value !== 'undefined'
                    ? value
                    : state.valueBeforeUpDown;

            return {
                ...state,
                focusedSectionIndex: sectionIndex,
                focusedSuggestionIndex: completeIndex,
                valueBeforeUpDown
            };

        case REVEAL_COMPLETE:
            return {
                ...state,
                isCollapsed: false
            };

        case CLOSE_COMPLETE:
            return {
                ...state,
                focusedSectionIndex: null,
                focusedCompleteIndex: null,
                valueBeforeUpDown: null,
                isCollapsed: true,
                lastAction: action.lastAction
            };

        default:
            return state;
    }
}