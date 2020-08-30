/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id=${entry.id} class="journalEntry">

        // Display the entry's full text, and the date
        // it was entered here.

            <h2>${entry.concept} | ${entry.date}</h2>
            <h3>"Feelin' like: " ${entry.mood}</h3>
            <p>${entry.entry}</p>                

        </section>
    `
}