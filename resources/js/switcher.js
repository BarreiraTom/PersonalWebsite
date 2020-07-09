const sectionsTemp= document.getElementsByTagName('section');
const sectionsSwitcher = [...sectionsTemp];

sectionsSwitcher.map(sect => {
    console.log(sect.id)
});