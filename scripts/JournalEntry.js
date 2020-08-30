/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h2>${entry.concept} | ${entry.date}</h2>
            <h3>Mood for the Day: ${entry.mood}</h3>
            <p>${entry.entry}</p>
        </section>       
    `
}