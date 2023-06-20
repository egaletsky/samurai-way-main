import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus Component', () => {
    test('status from status should be in te state', () => {
        const component = create(<ProfileStatus status="status" updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.status).toBe('status')
    })
    test('<span> should be displayed after initializing app', () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={() => {
        }}/>)
        const root = component.root
        expect(root.findByType('span')).not.toBeNull()
    })
    test('<input> shouldnot be displayed after initializing app', () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={() => {
        }}/>)
        const root = component.root
        expect(() => root.findByType('input')).toThrow()
    })
    test('<span> should have correct status', () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={() => {
        }}/>)
        const root = component.root
        expect(root.findByType('span').children[0]).toBe('status')
    })
    test('<input> should be displayed in edit mode', () => {
        const component = create(<ProfileStatus status={'status'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        expect(root.findByType('input')).not.toBeNull()
        expect(() => root.findByType('span')).toThrow()
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        // @ts-ignore
        instance?.deactivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1)
    })
})