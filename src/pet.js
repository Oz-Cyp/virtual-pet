//const critical_hunger = 10;
//const critical_fitness = 0;
//const critical_age = 30;
const min_hunger = 0;
const max_fitness = 10;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    Pet.prototype = {
        growup() {
            if (!this.isalive) {
                throw new Error('Your pet is no longer alive :(');
            }
            this.age += 1
            this.hunger += 5
            this.fitness -= 3
        },
        walk() {
            if (!this.isalive) {
                throw new Error('Your pet is no longer alive :(');
            }
            if (this.fitness <= 10) {
                return this.fitness = max_fitness
            } else {
                this.fitness = this.fitness += 4
            };
        },
        feed() {
            if (!this.isalive) {
                throw new Error('Your pet is no longer alive :(');
            }
            if ((this.hunger - 3) >= 0) {
                return this.hunger - 3
            } else {
                this.hunger = min_hunger
            }
        },
        get isalive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0
        }
    }
};

//if (this.hunger >= critical_hunger) {
//return false
//}
//if (this.fitness <= critical_fitness) {
//return false
//}
//if (this.age >= critical_age) {
//return false
//} else {
//return true
//}
module.exports = { Pet };