import members from '../../../data/staff.data.json';

export function getMember(id) {
    return members.find(e => e.id === id);
}

export function getMemberAvatar(id) {
    const member = members.find(e => e.id === id);
    return member?.avatar ?? "https://via.placeholder.com/150";
}

export function getInternalMembers() {
    return members.filter(x => x.internal === true);
}