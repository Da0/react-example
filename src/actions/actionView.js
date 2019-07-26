export default function toggleViewAction(isPreview) {
    return {
        type: 'TOGGLE_VIEW',
        payload: isPreview
    }
}