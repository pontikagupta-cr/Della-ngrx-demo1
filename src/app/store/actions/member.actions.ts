import {createAction, props} from '@ngrx/store';
import {IMember} from '../../models/member.interface';
import { from } from 'rxjs';

// GetUsersSuccess = '[User] Get Users Success',
// GetUser = '[User] Get User',
// GetUserSuccess = '[User] Get User Success'

export const  GetMembers  = createAction(
' [member] Get Members ',
props<{member : IMember}>()
);

export const  GetMembersSuccess  = createAction(
    ' [member] Get Members Success',
    props<{member : IMember}>()
    );

export const  GetMember  = createAction(
        ' [member] Get Member ',
        props<{member : number}>()
        );


export const  GetMemberSuccess  = createAction(
        ' [member] Get Member Success ',
          props<{member : IMember}>()
           );